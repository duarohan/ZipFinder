import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityToZipComponent } from './city-to-zip.component';

describe('CityToZipComponent', () => {
  let component: CityToZipComponent;
  let fixture: ComponentFixture<CityToZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityToZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityToZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
