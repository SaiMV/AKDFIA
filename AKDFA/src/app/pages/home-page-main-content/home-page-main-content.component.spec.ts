import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMainContentComponent } from './home-page-main-content.component';

describe('HomePageMainContentComponent', () => {
  let component: HomePageMainContentComponent;
  let fixture: ComponentFixture<HomePageMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
