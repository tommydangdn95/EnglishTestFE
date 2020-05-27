import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    return this.http.get<Words>(this.url + '/api/lesson');
  }
}
