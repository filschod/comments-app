import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommentModel } from './comment';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable()
export class CommentsService {
  commentsPath = 'comments';
  constructor(private http: HttpClient) {}

  getComments(
    limit: number,
    page: number,
    order: string
  ): Observable<CommentModel[]> {
    const options = {
      params: {
        limit,
        page,
        order,
        sortBy: 'id',
      },
    };
    return this.http.get<CommentModel[]>(
      `${environment.apiPath}${this.commentsPath}`,
      options
    );
    //   .pipe(catchError(this.handleError('getHeroes', [])));
  }

  addComment(coment: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(
      `${environment.apiPath}${this.commentsPath}`,
      coment,
      httpOptions
    );
  }
}
