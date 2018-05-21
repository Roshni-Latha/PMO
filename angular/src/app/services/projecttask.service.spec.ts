import { TestBed, inject } from '@angular/core/testing';

import { ProjecttaskService } from './projecttask.service';

describe('ProjecttaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjecttaskService]
    });
  });

  it('should be created', inject([ProjecttaskService], (service: ProjecttaskService) => {
    expect(service).toBeTruthy();
  }));
});
