import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RemoteDataService } from '../remote-data/remote-data.service';

@Injectable({
  providedIn: 'root',
})
export class SecuritiesService extends RemoteDataService {
  constructor(http: HttpClient) {
    super(http);
  }
}
