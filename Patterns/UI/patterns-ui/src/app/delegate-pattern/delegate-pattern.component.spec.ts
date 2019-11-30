import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatePatternComponent } from './delegate-pattern.component';

describe('DelegatePatternComponent', () => {
  let component: DelegatePatternComponent;
  let fixture: ComponentFixture<DelegatePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegatePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
