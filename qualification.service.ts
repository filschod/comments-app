import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Experience } from './experience';
import { environment } from 'src/environments/environment';

@Injectable()
export class QualificationService {
  experiencePath = 'experience';
  constructor(private http: HttpClient) {}

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(
      `${environment.apiPath}${this.experiencePath}`
    );
    //   .pipe(catchError(this.handleError('getHeroes', [])));
  }
}
