import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecontratComponent } from './deletecontrat.component';

describe('DeletecontratComponent', () => {
  let component: DeletecontratComponent;
  let fixture: ComponentFixture<DeletecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
