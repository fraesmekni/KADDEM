import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteentrepriseComponent } from './deleteentreprise.component';

describe('DeleteentrepriseComponent', () => {
  let component: DeleteentrepriseComponent;
  let fixture: ComponentFixture<DeleteentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
