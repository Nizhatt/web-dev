import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example4Component } from './example4';

describe('Example4Component', () => {
  let component: Example4Component;
  let fixture: ComponentFixture<Example4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Example4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

