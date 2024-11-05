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

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getHardwareInfo();
  }

  getHardwareInfo(){
    const userID = localStorage.getItem('id');
    console.log('dashboard id: ', userID);
  }
}
