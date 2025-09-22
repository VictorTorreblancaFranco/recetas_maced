import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calientes } from './calientes';

describe('Calientes', () => {
  let component: Calientes;
  let fixture: ComponentFixture<Calientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
