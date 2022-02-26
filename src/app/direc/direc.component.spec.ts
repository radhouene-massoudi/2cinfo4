import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecComponent } from './direc.component';

describe('DirecComponent', () => {
  let component: DirecComponent;
  let fixture: ComponentFixture<DirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
