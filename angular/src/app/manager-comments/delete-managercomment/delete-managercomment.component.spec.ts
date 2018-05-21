import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManagercommentComponent } from './delete-managercomment.component';

describe('DeleteManagercommentComponent', () => {
  let component: DeleteManagercommentComponent;
  let fixture: ComponentFixture<DeleteManagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteManagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
