import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputEquipeComponent } from './input-output-equipe.component';

describe('InputOutputEquipeComponent', () => {
  let component: InputOutputEquipeComponent;
  let fixture: ComponentFixture<InputOutputEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
