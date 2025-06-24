import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sumar } from './sumar';

describe('Sumar', () => {
  let component: Sumar;
  let fixture: ComponentFixture<Sumar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sumar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sumar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
