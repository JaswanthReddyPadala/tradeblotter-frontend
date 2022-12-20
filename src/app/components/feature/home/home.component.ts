import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public data = [
    {
      Days: 1,
      'Trade Date': 'asd',
      'Mngr. Code': 'sdfs',
    },
  ];
}
