import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChangesComponent } from './new-changes.component';

describe('NewChangesComponent', () => {
  let component: NewChangesComponent;
  let fixture: ComponentFixture<NewChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
