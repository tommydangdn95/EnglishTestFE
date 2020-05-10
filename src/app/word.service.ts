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

  getRandWord(): Observable<string> {
    return this.http.get(this.url + '/api/word', {responseType: 'text'});
  }
}
