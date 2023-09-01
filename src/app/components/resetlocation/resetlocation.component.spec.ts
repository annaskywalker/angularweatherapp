import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetlocationComponent } from './resetlocation.component';

describe('ResetlocationComponent', () => {
  let component: ResetlocationComponent;
  let fixture: ComponentFixture<ResetlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetlocationComponent]
    });
    fixture = TestBed.createComponent(ResetlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
