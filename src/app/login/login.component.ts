import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // returnUrl: string;
    username: string;
    password: string;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    navRegister() {
        this.router.navigate(['/registration']);
    }

    onSubmit() {
        this.authenticationService.login(this.username, this.password)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['/users']);
                },
                error: error => {
                    this.error = error;
                }
            });
    }
}