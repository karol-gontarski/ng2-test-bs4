/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZglosAwarieComponent } from './zglos-awarie.component';

describe('ZglosAwarieComponent', () => {
  let component: ZglosAwarieComponent;
  let fixture: ComponentFixture<ZglosAwarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZglosAwarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZglosAwarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
