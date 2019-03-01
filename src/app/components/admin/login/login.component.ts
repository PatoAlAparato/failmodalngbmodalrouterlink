import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.scss']
})
export  class  LoginComponent  {
    constructor(public  authService:  AuthService) {}
    modalClose( $event ) {
        console.log($event); // { submitted: true }
      }
}