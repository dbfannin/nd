import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinnyProfilesComponent } from './skinny-profiles.component';

describe('SkinnyProfilesComponent', () => {
  let component: SkinnyProfilesComponent;
  let fixture: ComponentFixture<SkinnyProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinnyProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinnyProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
