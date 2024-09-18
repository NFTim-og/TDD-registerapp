import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Signup', () => {
    expect(compiled.querySelector('h1')?.textContent).toBe('Signup');
  });

  it('Has label for Username', () => {
    expect(getNthLabelContent(0)).toBe('Username:');
  });

  it('Has label for Email', () => {
    expect(getNthLabelContent(1)).toBe('Email:');
  });

  it('Has label for Password', () => {
    expect(getNthLabelContent(2)).toBe('Password:');
  });

  function getNthLabelContent(index: number) {
    return compiled.querySelectorAll('label')[index]?.textContent;
  }

});