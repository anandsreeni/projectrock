import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apparels } from './apparels';

describe('Apparels', () => {
  let component: Apparels;
  let fixture: ComponentFixture<Apparels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apparels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apparels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
