import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _url: string = "https://demo.randomaccess.ca/Amanda/API_FW/Services/ServiceMain.svc/json/getPeople";
  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.post(this._url, {
      "token": "amandaportal",
      "lid": "",
      "peopleRSN": 159802
    }, httpOptions);
  }
}
