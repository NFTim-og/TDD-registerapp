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
    expect(getNthLabelContent(0).textContent).toBe('Username:');
  });

  it('Has label for Email', () => {
    expect(getNthLabelContent(1).textContent).toBe('Email:');
  });

  it('Has label for Password', () => {
    expect(getNthLabelContent(2).textContent).toBe('Password:');
  });

  it('Has input of type text for Username', () => {
    const inputUsername = getNthLabelContent(0)!.querySelector('input') as HTMLInputElement;
    expect(inputUsername).toBeTruthy();
    expect(inputUsername.type).toBe('text');
  });
  
  function getNthLabelContent(index: number) {
    return compiled.querySelectorAll('label')[index];
  }

});