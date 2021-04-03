import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService} from 'src/app/auth.service';



@Component({
  selector: 'app-user-adduser',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public user: any;
 
  constructor(private _userService: AuthService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      password2: '',
      email: '',
      first_name: '',
      last_name: '',
      
    };
  }

  register() {
    this._userService.register(this.user);
  }
 
}
