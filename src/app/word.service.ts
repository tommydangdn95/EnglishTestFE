import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Words} from './words';

@Injectable({
  providedIn: 'root'
})

export class WordService {

  url = environment.BASE_URL;

  constructor(private http: HttpClient) {
  }

  getRandWord(): Observable<Words> {
    const id = 'B991E589-F36D-4BB5-A3C9-BAB8ED7C9470';
    let params = new HttpParams();
    params = params.append('lessonId', id);
    return this.http.get<Words>(this.url + '/api/word', {params});
  }
}
