import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  hardwareInfo: any;

  constructor(private http: HttpClient, private cookieService: CookieService){

  }

  ngOnInit(): void {
    this.getHardwareInfo();
  }

  getHardwareInfo(){
    const userID = this.cookieService.get('id');
    const token = this.cookieService.get('token');

    console.log('id: ', userID);
    console.log('token: ', token);
  }
}
