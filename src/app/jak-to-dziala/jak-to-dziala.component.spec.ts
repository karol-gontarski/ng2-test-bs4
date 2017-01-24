/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JakToDzialaComponent } from './jak-to-dziala.component';

describe('JakToDzialaComponent', () => {
  let component: JakToDzialaComponent;
  let fixture: ComponentFixture<JakToDzialaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakToDzialaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakToDzialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
