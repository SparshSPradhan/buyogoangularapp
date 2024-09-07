import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component {
  name: string = '';
  emailOrPhone: string = '';
  password: string = '';

  constructor(private router: Router) {}

  continue() {
    this.router.navigate(['/signup-step2'], {
      state: { name: this.name, emailOrPhone: this.emailOrPhone, password: this.password }
    });
  }
}
