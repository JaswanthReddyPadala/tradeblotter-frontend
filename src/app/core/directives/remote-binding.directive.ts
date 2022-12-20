import { SecuritiesService } from './../services/securities/securities.service';
import { Directive, OnDestroy, OnInit } from '@angular/core';
import {
  DataBindingDirective,
  GridComponent,
} from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[remoteBindingDirective]',
})
export class RemoteBindingDirective
  extends DataBindingDirective
  implements OnInit, OnDestroy
{
  public serviceSubscription!: Subscription;

  constructor(
    private securitiesService: SecuritiesService,
    grid: GridComponent
  ) {
    super(grid);
  }

  public ngOnInit(): void {
    this.serviceSubscription = this.securitiesService.subscribe((result) => {
      this.grid.loading = false;
      this.grid.data = result;
      this.notifyDataChange();
    });

    super.ngOnInit();

    this.rebind();
  }

  public ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }

    super.ngOnDestroy();
  }

  public rebind(): void {
    this.grid.loading = true;
    this.securitiesService.query(this.state);
  }
}
