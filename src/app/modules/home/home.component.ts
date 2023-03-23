import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  dataPost: any;
  name = "Sharath Jeksani";
  constructor(public dataservice: DataService) {  }

  ngOnInit() {
    this.dataservice.getData$().subscribe(data => {
      console.log("data receieved " +data);
      this.dataPost = data;
    });
  }

}
