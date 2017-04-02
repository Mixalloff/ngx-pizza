type RequestOperator = '$in' | '$nin' | '$lt' | '$lte' | '$gt' | '$gte' | '$ne' | '$or' | '$eq';

interface Pagination {
  skip: number;
  limit: number;
}

interface SortField {
  field?: string,
  direction?: SortDirection
}

declare enum SortDirection {
  ASC = 1,
  DESC = -1
}

interface Filters {
  [filterName: string]: { operator: RequestOperator, value?: any, defaultValue?: any, settings?: any, name?: string }
}

interface SortFieldSelector {
  name: string;
  desc: string;
}
