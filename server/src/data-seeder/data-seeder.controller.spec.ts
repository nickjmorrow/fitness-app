import { Test, TestingModule } from '@nestjs/testing';
import { DataSeederController } from './data-seeder.controller';

describe('DataSeederController', () => {
  let controller: DataSeederController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataSeederController],
    }).compile();

    controller = module.get<DataSeederController>(DataSeederController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
