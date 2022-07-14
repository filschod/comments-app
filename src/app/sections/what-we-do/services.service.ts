import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Service } from './service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicesService {
  servicesPath = 'services';
  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(
      `${environment.apiPath}${this.servicesPath}`
    );
    //   .pipe(catchError(this.handleError('getHeroes', [])));
  }
}
