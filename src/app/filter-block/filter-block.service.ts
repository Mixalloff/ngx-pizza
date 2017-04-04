import { HttpRestService, GET, Path, QueryParam, QueryParams } from 'ngx-http-rest';
import { Injectable } from '@angular/core';
import RestConfig from 'app/core/configs/rest.config';

@Injectable()
@Path(`${ RestConfig.BASE_PATH }/goods`)
export class FilterBlockService extends HttpRestService {

  @GET
  getGoods(@QueryParams queryObj: any): any {}

}
