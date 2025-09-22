import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clasicos } from './clasicos';

describe('Clasicos', () => {
  let component: Clasicos;
  let fixture: ComponentFixture<Clasicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clasicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clasicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
