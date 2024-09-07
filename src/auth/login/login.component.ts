import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  userExists: boolean = false;
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  checkUserExists() {
    this.authService.checkUserExists(this.emailOrPhone).subscribe(exists => {
      this.userExists = exists;
      if (!exists) {
        this.router.navigate(['/signup-step1']);
      }
    });
  }

  login() {
    this.authService.validateLogin(this.emailOrPhone, this.password).subscribe(isValid => {
      if (isValid) {
        alert('Login successful');
      } else {
        this.loginError = 'Invalid password';
      }
    });
  }
}
