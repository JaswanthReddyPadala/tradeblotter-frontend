import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tradeblotter-frontend';

  public data = [
    {
      Days: 1,
      'Trade Date': 'asd',
      'Mngr. Code': 'sdfs',
    },
  ];
}
