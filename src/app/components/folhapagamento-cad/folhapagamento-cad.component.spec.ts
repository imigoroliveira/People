/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FolhapagamentoCadComponent } from './folhapagamento-cad.component';

describe('FolhapagamentoCadComponent', () => {
  let component: FolhapagamentoCadComponent;
  let fixture: ComponentFixture<FolhapagamentoCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolhapagamentoCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhapagamentoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
