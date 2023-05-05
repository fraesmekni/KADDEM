import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEquipeComponent } from './main-equipe.component';

describe('MainEquipeComponent', () => {
  let component: MainEquipeComponent;
  let fixture: ComponentFixture<MainEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
