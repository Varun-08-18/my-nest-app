import { Test, TestingModule } from '@nestjs/testing';
import { describe, expect, it, beforeEach } from '@jest/globals';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;

  beforeEach(async () => {
    const app: TestingModule =
      await Test.createTestingModule({
        controllers: [EmployeeController],
        providers: [EmployeeService],
      }).compile();

    employeeController =
      app.get<EmployeeController>(EmployeeController);
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });
});