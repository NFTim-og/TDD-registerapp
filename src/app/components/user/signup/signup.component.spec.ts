import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Signup', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toBe('Signup');
  });

  it('Has label for Username', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toBe('Username:');
  });

  it('Has label for Email', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('label')[1]?.textContent).toBe('Email:');
  });

  it('Has label for Password', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('label')[2]?.textContent).toBe('Password:');
  }); 

});