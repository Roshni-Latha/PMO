import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerCommentsComponent } from './create-manager-comments.component';

describe('CreateManagerCommentsComponent', () => {
  let component: CreateManagerCommentsComponent;
  let fixture: ComponentFixture<CreateManagerCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManagerCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
