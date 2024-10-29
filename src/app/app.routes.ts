import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CostumerAreaComponent } from './costumer-area/costumer-area.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChildProfileComponent } from './child-profile/child-profile.component';
import { LoginComponent } from './login/login.component';
import { CalendarEventsComponent } from './calendar-events/calendar-events.component';

export const routes: Routes = [  
    { path: '', component: HomeComponent }, 
    { path: 'customer-area', component: CostumerAreaComponent }, 
    { path: 'about', component: AboutUsComponent},
    { path: 'child-profile/:id', component: ChildProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'events', component: CalendarEventsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
