import { TestBed, inject } from '@angular/core/testing';

import { ManagercommentService } from './managercomment.service';

describe('ManagercommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagercommentService]
    });
  });

  it('should be created', inject([ManagercommentService], (service: ManagercommentService) => {
    expect(service).toBeTruthy();
  }));
});
