import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService} from 'src/app/auth.service';



@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  public user: any;
 
  constructor(private _userService: AuthService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      password: '',

    };
  }

  login() {
    this._userService.login(this.user);
  }
 

  logout() {
    this._userService.logout();
  }
 

}
