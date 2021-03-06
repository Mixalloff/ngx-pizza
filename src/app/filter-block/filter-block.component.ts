import { RequestBuilder } from './../core/request-builder.service';
import { FilterBlockService } from './filter-block.service';
import { Component, OnInit, Output, EventEmitter, trigger, transition, style, animate } from '@angular/core';

const DEFAULT_PAGINATION: Pagination = { skip: 0, limit: 25 };
const DEFAULT_FILTERS: Filters = {
  // vendor: { operator: '$eq', value: [], defaultValue: [], settings: { options: ['Саюри', 'Voodoo-pizza', 'Фарфор'] } },
  priceMax: { name: 'price', operator: '$lt', value: 1000, defaultValue: 1000, settings: { max: 1000, thumbLabel: true, step: 10 } },
  category: { name: 'categories', operator: '$in', value: [], defaultValue: [], settings: {options: ['роллы', 'пицца'] } },
};
const SORT_FIELDS: Array<SortFieldSelector> = [
    { name: 'price', desc: 'Цена' },
    { name: 'weight', desc: 'Вес' },
    { name: 'name', desc: 'Название' }
  ];

@Component({
  selector: 'pizza-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css'],
  providers: [FilterBlockService],
   animations: [
    trigger(
      'enterAnimation', [
          transition(':enter', [
              style({ height: 0, opacity: 0 }),
              animate(250, style({ height: '50px', opacity: 1 }))
            ]
          ),
         transition(':leave', [
              style({ height: '*', opacity: 1 }),
              animate(250, style({ height: 0, opacity: 0 }))
          ])
      ]
    )
  ],
})
export class FilterBlockComponent implements OnInit {
  public filters: Filters = Object.assign({}, DEFAULT_FILTERS);
  public sortFields: Array<SortFieldSelector> = SORT_FIELDS;
  public sortField: SortField = {};
  public pagination: Pagination = DEFAULT_PAGINATION;
  private totalCount: number;
  private requestBuilder = new RequestBuilder();

  @Output() public items: EventEmitter<any> = new EventEmitter();

  constructor(private filterBlockService: FilterBlockService) { }

  ngOnInit() {
    this.run();
  }

  run() {
    this.requestBuilder.reset();
    this.requestBuilder.setPagination(this.pagination);
    this.requestBuilder.setSorting(this.sortField);

    Object.keys(this.filters).forEach(filterName => {
      const filterObj = this.filters[filterName];
      this.requestBuilder.addFilter(filterObj.name || filterName, filterObj.operator, filterObj.value);
    } );
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
    // tslint:disable-next-line:forin
    for (const key in this.filters) {
      this.filters[key].value = this.filters[key].defaultValue;
    }
    this.pagination = DEFAULT_PAGINATION;
    this.sortField = {};
    this.run();
  }

  pageChanged(pagination: Pagination) {
    this.pagination = pagination;
    this.run();
  }

  toogleSortDirection() {
    this.sortField.direction = this.sortField.direction
                             ? this.sortField.direction * (-1)
                             : -1;
    this.run();
  }

  clearSorting() {
    this.sortField = {};
    this.run();
  }
}
