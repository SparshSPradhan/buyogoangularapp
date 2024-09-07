import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private organizationIds = ['Org1', 'Org2', 'Org3'];

  getOrganizations(): Observable<string[]> {
    return of(this.organizationIds);
  }

  validateOrganization(org: string): boolean {
    return this.organizationIds.includes(org);
  }
}
