import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipeComponent } from './delete-equipe.component';

describe('DeleteEquipeComponent', () => {
  let component: DeleteEquipeComponent;
  let fixture: ComponentFixture<DeleteEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
