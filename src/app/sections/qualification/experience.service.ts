import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ExperienceModel } from './experience';
import { environment } from 'src/environments/environment';

@Injectable()
export class ExperienceService {
  experiencePath = 'experience';
  constructor(private http: HttpClient) {}

  getExperience(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(
      `${environment.apiPath}${this.experiencePath}`
    );
    //   .pipe(catchError(this.handleError('getHeroes', [])));
  }
}
