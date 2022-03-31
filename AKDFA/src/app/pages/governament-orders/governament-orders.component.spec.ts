import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernamentOrdersComponent } from './governament-orders.component';

describe('GovernamentOrdersComponent', () => {
  let component: GovernamentOrdersComponent;
  let fixture: ComponentFixture<GovernamentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernamentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernamentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
