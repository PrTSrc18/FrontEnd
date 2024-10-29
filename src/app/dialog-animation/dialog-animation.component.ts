import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-animation',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-animation.component.html',
  styleUrl: './dialog-animation.component.css'
})
export class DialogAnimationComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationComponent>) {}
}
