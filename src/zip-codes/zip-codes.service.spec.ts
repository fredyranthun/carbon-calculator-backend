import { Test, TestingModule } from '@nestjs/testing';
import { ZipCodesService } from './zip-codes.service';

describe('ZipCodesService', () => {
  let service: ZipCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZipCodesService],
    }).compile();

    service = module.get<ZipCodesService>(ZipCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a zip code', () => {
    expect(service.findByZipCode('10001')).toEqual({
      zipCode: '10001',
      state: 'NY',
      eGridSubregion: 'NYCW',
    });
  });

  it('should not find a zip code', () => {
    expect(service.findByZipCode('00000')).toBeUndefined();
  });

  it('should find an eGrid subregion', () => {
    expect(service.findEGridSubregion('10001')).toBe('NYCW');
  });
});
