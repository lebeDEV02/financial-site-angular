import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthResponseInterface } from '../types/authResponse';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  returnUserResponse = (
    response: AuthResponseInterface
  ): CurrentUserInterface => {
    return response.user;
  };
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.returnUserResponse));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.returnUserResponse));
  }
}
