import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AnyMxRecord } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': this.baseUrl,
    }),
  };

  constructor(private http: HttpClient) {}

  EntitiesByCategoryId(categoryId: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Entities/EntitiesByCategoryId', {
      params: new HttpParams({ fromString: 'categoryId=' + categoryId }),
    });
  }

  AddEntity(obj: any): Observable<any> {
    return this.http
      .post(this.baseUrl + 'Entities/AddEntity', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': this.baseUrl,
        }),
      })
      .pipe(map((data) => data));
  }

  EditEntity(obj: any): Observable<any> {
    return this.http
      .post(this.baseUrl + 'Entities/EditEntity', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': this.baseUrl,
        }),
      })
      .pipe(map((data) => data));
  }

  RemoveEntity(entityId: any) {
    return this.http.get<any>(this.baseUrl + 'Entities/RemoveEntity', {
      params: new HttpParams({ fromString: 'entityId=' + entityId }),
    });
  }

  EntityById(entityId: any) {
    return this.http.get<any>(this.baseUrl + 'Entities/EntityById', {
      params: new HttpParams({ fromString: 'entityId=' + entityId }),
    });
  }

  AddAttachments(obj: any): Observable<any> {
    return this.http
      .post(this.baseUrl + 'Entities/AddAttachments', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': this.baseUrl,
        }),
      })
      .pipe(map((data) => data));
  }

  RemoveAttachment(entityId: any) {
    return this.http.get<any>(this.baseUrl + 'Entities/RemoveAttachment', {
      params: new HttpParams({ fromString: 'AttachmentId=' + entityId }),
    });
  }

  GetAttachments(entityId: any) {
    return this.http.get<any>(this.baseUrl + 'Entities/GetAttachments', {
      params: new HttpParams({ fromString: 'entityId=' + entityId }),
    });
  }

  LoadImage(fullImageUrl: any): Observable<Blob> {
    return this.http.get(fullImageUrl, {
      responseType: 'blob',
    });
  }
}
