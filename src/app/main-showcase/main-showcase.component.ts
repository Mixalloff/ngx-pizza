import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-main-showcase',
  templateUrl: './main-showcase.component.html',
  styleUrls: ['./main-showcase.component.css']
})
export class MainShowcaseComponent implements OnInit {
  public goods: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  setItems(items) {
    this.goods = items;
  }

}
