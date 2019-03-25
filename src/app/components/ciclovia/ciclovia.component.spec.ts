import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloviaComponent } from './ciclovia.component';

describe('CicloviaComponent', () => {
  let component: CicloviaComponent;
  let fixture: ComponentFixture<CicloviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
