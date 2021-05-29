import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    login(username: string, password: string) {
        return this.http.post<any>(`https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/login`, { username, password })
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('userToken', JSON.stringify(user));
                return user;
            }));
    }
}