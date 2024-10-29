import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidebarOpen = false;

    openSidebar() {
        this.isSidebarOpen = true;
    }

    closeSidebar() {
        this.isSidebarOpen = false;
    }
}
