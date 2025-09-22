import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poncheras } from './poncheras';

describe('Poncheras', () => {
  let component: Poncheras;
  let fixture: ComponentFixture<Poncheras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poncheras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poncheras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
