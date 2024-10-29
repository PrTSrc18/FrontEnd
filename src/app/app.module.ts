import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostumerAreaComponent } from './costumer-area/costumer-area.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FooterComponent,
    ChildComponent,
    EmployeeComponent,
    CostumerAreaComponent,
    FormsModule,
    
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ChildComponent,
    EmployeeComponent,
    CostumerAreaComponent,

  ]
})
export class SharedModule { }
