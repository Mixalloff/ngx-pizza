export class RequestBuilder {
  private _requestObject: any = {};

  public get requestObject() {
    return this._requestObject;
  }

  public setPagination(pagination: Pagination) {
    Object.assign(this._requestObject, { $skip: pagination.skip, $limit: pagination.limit });
  }

  public addFilter(field: string, operator: RequestOperator, value: any) {
    let suffix = Array.isArray(value) ? '[]' : ''; /**Suffix for arrays mark */
    const key = `${ field }[${ operator }]${suffix}`;
    const filterField = { [ key ]: value };
    Object.assign(this._requestObject, filterField);
  }

  public setSorting(sortField: SortField) {
    if (!sortField.field) return;
    const sortingObject = { [`$sort[${ sortField.field }]`]: sortField.direction || 1 };
    Object.assign(this._requestObject, sortingObject);
  }

  public reset() {
    this._requestObject = {};
  }
}
