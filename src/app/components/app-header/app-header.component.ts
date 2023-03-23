import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { routes } from "../../app-routing.module";

@Component({
    selector: "app-header",
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent implements OnInit {
    title = 'Portfolio';
    constructor(private router: Router) {

    }
    ngOnInit(): void {

    }
    // displayPageTitle(): string {
    //     const pageRoute = routes.find(this.router);
    //     return pageRoute
    // }
}