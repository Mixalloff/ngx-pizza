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

  @Output() public items: EventEmitter<any> = new EventEmitter();

  constructor(private filterBlockService: FilterBlockService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.filterBlockService
      .getGoods(this.pagination.skip, this.pagination.limit)
      .subscribe(items => {
        this.items.emit(items.data);
        this.totalCount = items.total;
      });
  }

  pageChanged(pagination: Pagination) {
    this.pagination = pagination;
    this.search();
  }
}
