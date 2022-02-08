import { Test, TestingModule } from '@nestjs/testing';
import { CheckNewTweetsService } from './check-new-tweets.task';

describe('CheckNewTweetsService', () => {
  let service: CheckNewTweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckNewTweetsService],
    }).compile();

    service = module.get<CheckNewTweetsService>(CheckNewTweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
