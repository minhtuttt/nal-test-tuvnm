import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {

    p: number = 1;
    listOfUsers: any[] = [
        { name: 'Ethan', nameImg: 'face12.jpg', bg: 'bg-success', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face11.jpg', bg: 'bg-danger', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face9.jpg', bg: 'bg-warning', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face8.jpg', bg: 'bg-primary', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face7.jpg', bg: 'bg-infor', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face6.jpg', bg: 'bg-success', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face12.jpg', bg: 'bg-success', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face11.jpg', bg: 'bg-danger', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face9.jpg', bg: 'bg-warning', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face8.jpg', bg: 'bg-primary', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face7.jpg', bg: 'bg-infor', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
        { name: 'Ethan', nameImg: 'face6.jpg', bg: 'bg-success', valueNow: 50, amount: 77.79, deadline: 'May 15, 2015' },
    ]

    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {
        // redirect to llogin if the user is not logged in
        if (!localStorage.getItem('userToken')) {
            this.router.navigate(['/login']);
        }
    }
};


