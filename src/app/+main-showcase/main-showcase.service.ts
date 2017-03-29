import { HttpRestService, GET, Path } from './../core/ngx-http-rest/ngx-http-rest.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import RestConfig from 'app/core/configs/rest.config';

@Injectable()
@Path(`${ RestConfig.BASE_PATH }/pizzas`)
export class MainShowcaseService extends HttpRestService {

  @GET
  getGoods(): any {}

}
