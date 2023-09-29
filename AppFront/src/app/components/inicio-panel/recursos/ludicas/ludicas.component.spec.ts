import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudicasComponent } from './ludicas.component';

describe('LudicasComponent', () => {
  let component: LudicasComponent;
  let fixture: ComponentFixture<LudicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LudicasComponent]
    });
    fixture = TestBed.createComponent(LudicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
