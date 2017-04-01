import { RequestBuilder } from './../core/request-builder.service';
import { FilterBlockService } from './filter-block.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

const DEFAULT_PAGINATION: Pagination = { skip: 0, limit: 25 };

@Component({
  selector: 'pizza-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css'],
  providers: [FilterBlockService]
})
export class FilterBlockComponent implements OnInit {
  public filters = {};
  private pagination: Pagination = DEFAULT_PAGINATION;
  private totalCount: number;
  private requestBuilder = new RequestBuilder();

  @Output() public items: EventEmitter<any> = new EventEmitter();

  constructor(private filterBlockService: FilterBlockService) { }

  ngOnInit() {
    this.run();
  }

  run() {
    this.requestBuilder.setPagination(this.pagination);
    /*
     Example of filter items, that price greater than 600
     this.requestBuilder.addFilter('price', '$gt', 600);
    */
    this.filterBlockService
      .getGoods(this.requestBuilder.requestObject)
      .subscribe(items => {
        this.items.emit(items.data);
        this.totalCount = items.total;
      });
  }

  search() {
    this.pagination = DEFAULT_PAGINATION;
    this.run();
  }

  reset() {
    this.filters = {};
    this.pagination = DEFAULT_PAGINATION;
    this.run();
  }

  pageChanged(pagination: Pagination) {
    this.pagination = pagination;
    this.run();
  }
}
