import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LattestNewsComponent } from './lattest-news.component';

describe('LattestNewsComponent', () => {
  let component: LattestNewsComponent;
  let fixture: ComponentFixture<LattestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LattestNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LattestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
