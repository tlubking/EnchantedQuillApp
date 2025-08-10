import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promptform } from './prompt-form';

describe('Promptform', () => {
  let component: Promptform;
  let fixture: ComponentFixture<Promptform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promptform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promptform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
