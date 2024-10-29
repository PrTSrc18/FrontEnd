import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  onLogoClick(event: MouseEvent): void {
    event.stopPropagation(); // Prevent event propagation
    this.router.navigate(['/']); // Navigate to the home route
  }

  navigateToCustomerArea(event: MouseEvent): void {
    console.log("Navigating to Customer Area"); // Debugging log
    this.router.navigate(['/customer-area']);
  }

  onEventClick(event: MouseEvent): void{
    event.stopPropagation(); // Prevent event propagation
    this.router.navigate(['/events']); 
  }

  onLoginClick(event: MouseEvent): void{
    console.log("carregou")
    event.stopPropagation(); // Prevent event propagation
    this.router.navigate(['/login']); 
  }
}
