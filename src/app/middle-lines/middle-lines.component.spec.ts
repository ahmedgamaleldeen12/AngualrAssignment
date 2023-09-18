import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLinesComponent } from './middle-lines.component';

describe('MiddleLinesComponent', () => {
  let component: MiddleLinesComponent;
  let fixture: ComponentFixture<MiddleLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleLinesComponent]
    });
    fixture = TestBed.createComponent(MiddleLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
