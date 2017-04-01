type RequestOperator = '$in' | '$nin' | '$lt' | '$lte' | '$gt' | '$gte' | '$ne' | '$or';

export class RequestBuilder {
  private _requestObject: any = {};

  public get requestObject() {
    return this._requestObject;
  }

  public setPagination(pagination: Pagination) {
    Object.assign(this._requestObject, { $skip: pagination.skip, $limit: pagination.limit });
  }

  public addFilter(field: string, operator: RequestOperator, value: any) {
    const key = `${ field }[${ operator }]`;
    const filterField = { [ key ]: value };
    Object.assign(this._requestObject, filterField);
  }

}
