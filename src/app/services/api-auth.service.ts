import { Http, Headers } from '@angular/http';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private global: GlobalService, private http: Http) {
  }

  getAuthToken() {

    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const postData = {
      username      : this.global.applicationUsername,
      password      : this.global.applicationPassword,
      client_id     : this.global.applicationClientId,
      client_secret : this.global.applicationClientSecret,
      grant_type    : this.global.applicationGrantType
    };

    this.http.post('/auth/token', JSON.stringify(postData), { headers : headers });
  }

}
