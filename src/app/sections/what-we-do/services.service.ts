import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServiceModel } from './service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicesService {
  servicesPath = 'services';
  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(
      `${environment.apiPath}${this.servicesPath}`
    );
    //   .pipe(catchError(this.handleError('getHeroes', [])));
  }
}
