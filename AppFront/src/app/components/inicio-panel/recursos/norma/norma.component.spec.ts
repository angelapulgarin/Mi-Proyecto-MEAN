import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaComponent } from './norma.component';

describe('NormaComponent', () => {
  let component: NormaComponent;
  let fixture: ComponentFixture<NormaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormaComponent]
    });
    fixture = TestBed.createComponent(NormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
