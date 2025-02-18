import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxControlComponent } from './flux-control.component';

describe('FluxControlComponent', () => {
  let component: FluxControlComponent;
  let fixture: ComponentFixture<FluxControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
