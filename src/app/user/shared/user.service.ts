import { User } from './user';
import { Headers, Http } from '@angular/http';
import { GlobalService } from './../../services/global.service';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private global: GlobalService, private http: Http) { }


  createUser(user: User): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(this.global.apiUrl + '/users', JSON.stringify(user), { headers : headers }).toPromise();
  }


}
