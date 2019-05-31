import { async, TestBed } from '@angular/core/testing';
import { CoreDateModule } from './core-date.module';

describe('CoreDateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreDateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreDateModule).toBeDefined();
  });
});
