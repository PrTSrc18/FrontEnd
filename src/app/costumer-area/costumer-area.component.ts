import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ChildComponent } from '../child/child.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ChildProfileComponent } from '../child-profile/child-profile.component';

@Component({
  selector: 'app-costumer-area',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule, ChildComponent, EmployeeComponent, ChildProfileComponent],
  templateUrl: './costumer-area.component.html',
  styleUrl: './costumer-area.component.css'
})
export class CostumerAreaComponent{
  activePanel: string = 'first'; // Set a default panel if needed
  selectedChildId: number | null = null;


  openPanel(panel: string): void {
    this.activePanel = panel; // Update activePanel based on button click
    console.log(`Active panel changed to: ${this.activePanel}`); // Debugging line
  }

  goToProfile(childId: number): void {
    this.selectedChildId = childId; // Set the selected child's ID
    this.activePanel = 'profile'; // Switch to profile panel
  }

  onPanelSelected(event: any): void {
    // Handle the event if needed
  }
}
