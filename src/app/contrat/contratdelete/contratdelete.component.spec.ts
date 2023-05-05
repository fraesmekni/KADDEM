import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratdeleteComponent } from './contratdelete.component';

describe('ContratdeleteComponent', () => {
  let component: ContratdeleteComponent;
  let fixture: ComponentFixture<ContratdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
