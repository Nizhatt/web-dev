import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example2Component } from './example2';

describe('Example2Component', () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

