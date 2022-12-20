import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, toODataString } from '@progress/kendo-data-query';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class RemoteDataService extends BehaviorSubject<GridDataResult> {
  public loading!: boolean;

  constructor(private http: HttpClient) {
    super({ data: [], total: 0 });
  }

  public query(state: State): void {
    this.fetch(state).subscribe((x) => super.next(x));
  }

  protected fetch(state: State): Observable<GridDataResult> {
    this.loading = true;
    console.log(toODataString(state));
    return this.http
      .get('https://mocki.io/v1/464dc6bf-1dc0-48b6-ba81-569627673c9d')
      .pipe(
        map((response: any) => {
          console.log(response[0]);
          return <GridDataResult>{
            data: response,
            total: response.length,
          };
        }),
        tap(() => (this.loading = false))
      );
  }
}
