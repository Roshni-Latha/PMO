import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserStoryComponent  } from './create-userstory.component';

describe('CreateUserstoryComponent', () => {
  let component: CreateUserStoryComponent ;
  let fixture: ComponentFixture<CreateUserStoryComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserStoryComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserStoryComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
