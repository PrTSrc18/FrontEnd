import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-calendar-events',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './calendar-events.component.html',
  styleUrl: './calendar-events.component.css'
})
export class CalendarEventsComponent {
  selected: Date | null = null;
  selectedEvent: { title: string; description: string } | null = null;

  // Example events data
  events1 = [
    { date: '2023-10-01', title: 'Event 1', description: 'Description for Event 1' },
    { date: '2023-10-02', title: 'Event 2', description: 'Description for Event 2' },
    // Add more events as needed
  ];

  onDateSelected(date: string) {
    // Logic to set selectedEvent based on selected date
    const event = this.events1.find(e => e.date === date);
    this.selectedEvent = event || null;
  }
}
