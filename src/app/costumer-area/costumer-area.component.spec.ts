import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerAreaComponent } from './costumer-area.component';
import { RouterOutlet } from '@angular/router';

describe('CostumerAreaComponent', () => {
  let component: CostumerAreaComponent;
  let fixture: ComponentFixture<CostumerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumerAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
