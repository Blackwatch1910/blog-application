import { Injectable } from '@angular/core';

// importing packages for HttpRequests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// importing observables
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs: any;
  public currentBlog: any;

  public baseURL = 'https://blogapp.edwisor.com/api/v1/blogs';
  // tslint:disable-next-line: max-line-length
  public ApiKey = 'MDE3NGY2ODkwYzRlMDI4MDYwNjgyZWIyZGVhYmUwM2QzM2QzNDAwYzE3MDUyODBiOTQ1MjhlNTUxODJkZDBiNDRkOWI0ZWZjYzdmNTQxNjQ3NzA0NWZhNmU1N2QzYzI0MjUzOWQ0YzU4MTgxY2E5MzhmMjE3NzlhMzdmOGI4ZTJjNg==';

  constructor(private http: HttpClient) {
    console.log('http-service called');
  }

  // exception handler

  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs(): any {
    const myResponse = this.http.get(this.baseURL + '/all?authToken=' + this.ApiKey);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {

    const myResponse = this.http.get(this.baseURL + '/view' + '/' + currentBlogId + '?authToken=' + this.ApiKey);
    return myResponse;
  }

  public createBlog(blogData): any {

    const myResponse = this.http.post(this.baseURL + '/create' + '?authToken=' + this.ApiKey, blogData);
    return myResponse;
  }

  public editBlog(blogId, blogData): any {

    const myResponse = this.http.put(this.baseURL + '/' + blogId + '/edit' + '?authToken=' + this.ApiKey, blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    const data = {};
    const myResponse = this.http.post(this.baseURL + '/' + blogId + '/delete' + '?authToken=' + this.ApiKey, data);
    return myResponse;
  }
}
