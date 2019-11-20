import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alertValue = 'success';
  valuesArray = ['success', 'danger', 'warning', 'primary', 'dark'];

  changeValueAlert(e) {
    this.alertValue = e.target.value;
    console.log( e.target.value );
  }

  constructor() { }

  ngOnInit() {
  }

}
