import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from "moment";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  public token: string;

  public expires_at: Date;
  public expires_in: number;

  public username: string;

  public errors: any = [];

  constructor(private http: HttpClient, public router: Router) { }

  //Login Component area
  login(data: any) {
      return this.http.post(this.baseUrl + '/auth/login/', JSON.stringify(data), this.httpOptions).subscribe(
        (res) => {
          console.log(res);
          this.token = res['token'];
          this.setSession(this.token, this.expires_in);

          const token = localStorage.getItem("token");
          if (token) {
            this.router.navigate(['dashboard/analytics']);
              }
          
        },
        (err) => {
          this.errors = err.error;
          window.alert('Username and Password Incorrect')
          console.log(this.errors)
        }
      )
  }

  //Register Component Area

  register(data: any) {
    return this.http.post(this.baseUrl + '/auth/register/', JSON.stringify(data), this.httpOptions).subscribe(
      (res) => {
        console.log(res);
        window.alert('Succesfully Added!!!')
      },
      (err) => {
        this.errors = err.error;
        console.log(err)
        window.alert('Failed to Register a User....')
      }
    )
}

  setSession(token, expires_in) {
    const expiresAt = moment().add(expires_in, 'second');

    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    this.token = null;
    this.expires_at = null;
    this.username = null;
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    const token = localStorage.getItem("token");
    // Check if the token exists in local storage
    if (!token) {
      window.alert('You are logged out !');
      this.router.navigate(['/']);
        }
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.expires_in = token_decoded.exp
    this.expires_at = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }
  
  }
