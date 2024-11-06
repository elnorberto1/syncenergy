import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';  //služba pre komunikáciu s backendom (serverom) / get, post, put, delete..
import { Login } from '../models/login.model';
import { Token } from '../models/token.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({           //dekoratér, umožnuje službe, aby mohla byt injektovana do iných komponentov
  providedIn: 'root'
})

export class AuthService implements HttpClientModule{
  private loginURL = 'https://139.162.149.82:8000/login'; //139.162.149.82
  private verifyTokenURL = 'http://139.162.149.82:8000/verify-token';
  //private secretHeaderKey = 'cfc72715ee99b6c45f0b80046c8f6b19c2a4b5cb1e8dd63e5d8fae4b5e513191';
  //HttpClient je spristupneny vramci služby AuthService
  //HttpClient sa automaticky poskytne pri vytvoreni AuthService  
  constructor(private http: HttpClient, private cookieServie: CookieService) { }

  /* 
      email: string; password: string; 
      - prijimame 2 parametre email a password
      
      Observable
      - špecialny typ datovej štruktury
      - umožňuje asynchronne spracovanie dat
        -> môžeme čakať na odpoveď zo servera bez toho, aby 
          sme zablokovali chod aplikácie

      this.http.post
      - voláme metódu post na inštancii HttpClient

      credentials: { email: string; password: string; }
      - objekt, ktorý posielame na server

      <any>
      - genericky typ
      - hovori, že očakavame akykolvek typ odpovede
      - ak by sme vedeli, ze odpoved stringova dali by sme <string>
  */

  login(credentials: Login): Observable<any> {
    return this.http.post<any>(this.loginURL, credentials);
  }

  saveToken(token: string) {
    this.cookieServie.set('authToken', token, {
      //expires: 1,
      secure: true
    });
  }

  getToken(): string{
    return this.cookieServie.get('authToken');
  }

  verifyToken(): Observable<any>{
    const token = this.getToken();

    if (!token) {
      return new Observable(observer => observer.error('No token found'));
    }
    return this.http.post(this.verifyTokenURL, { token });
  }

}
