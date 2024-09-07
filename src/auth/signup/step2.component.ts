import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from '../../app/services/mock-data.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  organization: string = '';
  designation: string = '';
  birthdate: Date;
  city: string = '';
  pincode: string = '';
  orgError: string = '';

  organizations: string[] = [];

  constructor(private mockService: MockDataService, private router: Router) {
    this.mockService.getOrganizations().subscribe(orgs => (this.organizations = orgs));
  }

  validateOrganization() {
    if (!this.mockService.validateOrganization(this.organization)) {
      this.orgError = 'Unknown organization-id';
    } else {
      this.orgError = '';
    }
  }

  submit() {
    if (!this.orgError) {
      alert('Sign up complete');
      this.router.navigate(['/login']);
    }
  }
}
