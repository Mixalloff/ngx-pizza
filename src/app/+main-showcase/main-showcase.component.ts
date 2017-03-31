import { MainShowcaseService } from './main-showcase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-main-showcase',
  templateUrl: './main-showcase.component.html',
  styleUrls: ['./main-showcase.component.css'],
  providers: [MainShowcaseService]
})
export class MainShowcaseComponent implements OnInit {
  public goods: Array<any>;
  constructor(private mainShowcaseService: MainShowcaseService) { }

  ngOnInit() {
  }

  setItems(items) {
    this.goods = items;
  }

}
