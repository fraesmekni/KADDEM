import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectdetailsComponent } from './addprojectdetails.component';

describe('AddprojectdetailsComponent', () => {
  let component: AddprojectdetailsComponent;
  let fixture: ComponentFixture<AddprojectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
