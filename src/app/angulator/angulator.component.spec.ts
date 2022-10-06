import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulatorComponent } from './angulator.component';

describe('AngulatorComponent', () => {
  let component: AngulatorComponent;
  let fixture: ComponentFixture<AngulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
