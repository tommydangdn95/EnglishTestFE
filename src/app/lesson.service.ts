import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Words} from './words';
import {Lessons} from './lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  url = environment.LOCAL_URL;

  constructor(private http: HttpClient) {
  }

  getLesson(): Observable<Lessons> {
    return this.http.get<Lessons>(this.url + '/api/lesson');
  }
}
