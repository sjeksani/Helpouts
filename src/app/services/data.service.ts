import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  params: {page: '0', per_page: '25'},
  headers: new HttpHeaders({
    'X-RapidAPI-Key': '714cca0658msh216e289ea475806p10019ajsn08805b44dfcf',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;

  constructor(protected http: HttpClient) {}

  getData$(): Observable<any> {
  return this.http.get('https://free-nba.p.rapidapi.com/players', httpOptions);
    // console.log("inside get    " + JSON.stringify(response));


  }
}


