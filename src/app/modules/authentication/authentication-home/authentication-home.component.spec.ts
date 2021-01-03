import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationHomeComponent } from './authentication-home.component';

describe('AuthenticationHomeComponent', () => {
  let component: AuthenticationHomeComponent;
  let fixture: ComponentFixture<AuthenticationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
