import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipToAreaComponent } from './zip-to-area.component';

describe('ZipToAreaComponent', () => {
  let component: ZipToAreaComponent;
  let fixture: ComponentFixture<ZipToAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipToAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipToAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
