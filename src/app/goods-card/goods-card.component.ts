import { Component, Input } from '@angular/core';

@Component({
  selector: 'pizza-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css']
})
export class GoodsCardComponent {

  @Input()
  public goodItem: any;

}
