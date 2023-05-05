import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratinputoutputComponent } from './contratinputoutput.component';

describe('ContratinputoutputComponent', () => {
  let component: ContratinputoutputComponent;
  let fixture: ComponentFixture<ContratinputoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratinputoutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratinputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
