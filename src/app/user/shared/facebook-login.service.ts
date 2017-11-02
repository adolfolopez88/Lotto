import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { LoginOptions } from 'ngx-facebook/dist/umd';
import { Headers, Http } from '@angular/http';
import { GlobalService } from './../../services/global.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Injectable()
export class  FacebookLoginService {

  constructor(private fb: FacebookService,
    private global: GlobalService, private userService: UserService) {

    const initParams: InitParams = {
      appId: global.facebookApiIde,
      xfbml: true,
      version: 'v2.10'
    };

    fb.init(initParams);
  }

  loginWithFacebook(): void {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'email, public_profile'
    };

    this.fb.login(loginOptions)
    .then((response: LoginResponse) => {

      this.getProfile(response.authResponse.userID)
      .then((profile: any) => {

        const user = new User;
        user.email = profile.email;
        user.username = profile.email;
        user.password = Date.now().toString();

        this.userService.createUser(user)
        .then(userResponse => {

        });
      })
      .catch((error: any) => console.log(error));

    })
    .catch((error: any) => console.log(error));
  }

  getProfile(userId: string): Promise<any> {
    return this.fb.api('/' + userId , 'get', { fields : 'email,first_name'});
  }
}
