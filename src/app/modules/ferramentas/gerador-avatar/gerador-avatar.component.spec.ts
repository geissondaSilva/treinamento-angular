import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorAvatarComponent } from './gerador-avatar.component';

describe('GeradorAvatarComponent', () => {
  let component: GeradorAvatarComponent;
  let fixture: ComponentFixture<GeradorAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeradorAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
