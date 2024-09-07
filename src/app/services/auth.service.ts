import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' }
  ];

  // Check if user exists by email/phone
  checkUserExists(emailOrPhone: string): Observable<boolean> {
    const user = this.users.find(user => user.email === emailOrPhone);
    return of(!!user);
  }

  // Validate login credentials
  validateLogin(emailOrPhone: string, password: string): Observable<boolean> {
    const user = this.users.find(
      user => user.email === emailOrPhone && user.password === password
    );
    return of(!!user);
  }
}
