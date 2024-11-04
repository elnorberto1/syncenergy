import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string= '';
  errorMessage: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  loginSubmit(){
    if (!this.email || !this.password) {
      this.errorMessage = 'Email or password are required!';
      return;
    }
    this.errorMessage = '';

    console.log("email: ", this.email);
    console.log("password: ", this.password);

    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        if(response.token){
          this.authService.saveToken(response.token);
          this.router.navigate(['/dashboard']);
          console.log('Login successful', response);
        }
        else{
          this.errorMessage = 'Invalid email or password';
          console.log('Login failed', response);
        }
      },
      error: (error) => {
        this.errorMessage = 'Invalid email or password';
        console.error('Login failed', error);
      },
    });
  } 
}