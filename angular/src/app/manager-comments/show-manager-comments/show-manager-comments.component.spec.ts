import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagerCommentsComponent } from './show-manager-comments.component';

describe('ShowManagerCommentsComponent', () => {
  let component: ShowManagerCommentsComponent;
  let fixture: ComponentFixture<ShowManagerCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowManagerCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManagerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
