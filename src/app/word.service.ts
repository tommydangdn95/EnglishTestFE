import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordService {

  url = environment.BASE_URL;

  constructor(private http: HttpClient) {
  }

  getRandWord(): Observable<any> {
    return this.http.get<any>(this.url + '/api/word');
  }
}
