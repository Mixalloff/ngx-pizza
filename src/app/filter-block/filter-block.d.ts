interface SortField {
  field?: string,
  direction?: SortDirection
}

declare enum SortDirection {
  ASC = 1,
  DESC = -1
}