import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})





export class UserComponent implements AfterViewInit{

    constructor(private router: Router) { 
        
    }
    
    // displayedColumns: string[] = ['name', 'amount', 'deadline'];
    // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    // // @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
      }

    // ngOnInit() {}

    
};
