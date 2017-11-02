import { Http } from '@angular/http';
import { FacebookLoginService } from '../shared/facebook-login.service';
import { LoginOptions } from 'ngx-facebook/dist/umd';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalService]
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, private facebookLoginService: FacebookLoginService) {

  }

  public ngOnInit(): void {

  }

  loginWithFacebook() {
    alert('entro');
    this.http.get('http://lotto-api.com/auth/login/facebook/');
    //this.facebookLoginService.loginWithFacebook();
  }



}
