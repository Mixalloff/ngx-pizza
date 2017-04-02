import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pizza-filter-pagination',
  templateUrl: './filter-pagination.component.html',
  styleUrls: ['./filter-pagination.component.css']
})
export class FilterPaginationComponent {
  public pagination: Pagination = { skip: 0, limit: 25 };
  public availableItemsPerPageCounts: Array<number> = [ 25, 50, 100 ];

  @Input() public totalCount: number;

  @Output() public changed: EventEmitter<any> = new EventEmitter();

  back() {
    this.pagination.skip -= +this.pagination.limit;
    this.runFilter();
  }

  forward() {
    this.pagination.skip += +this.pagination.limit;
    this.runFilter();
  }

  runFilter() {
    this.changed.emit(this.pagination);
  }

  constructLimitInfoRow() {
    const from = this.pagination.skip,
          to = Math.min(this.pagination.skip + this.pagination.limit, this.totalCount),
          total = this.totalCount;

    return `${ from } - ${ to } из ${ total }`;
  }
}
