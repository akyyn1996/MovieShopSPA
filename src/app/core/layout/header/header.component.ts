import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated: boolean;
  logedInUser: User;
  constructor(private authService: AuthenticationService, private router: Router) {}
  ngOnInit(): void {
    this.authService.isUserAuthenticated.subscribe((isLogedIn) => {
      this.isUserAuthenticated = isLogedIn;
      if (this.isUserAuthenticated) {
        // get the User info
        this.authService.currentLogedInUser.subscribe((user) => {
          this.logedInUser = user;
        });
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}