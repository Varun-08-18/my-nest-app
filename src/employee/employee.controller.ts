import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getEmployees() {
    return this.employeeService.getEmployee();
  }

  @Post()
  createEmployee(@Body() employee: CreateEmployeeDto) {
    return this.employeeService.createEmployee(employee);
  }

  @Put(':id')
  updateEmployee(
    @Param('id') id: string,
    @Body() data: CreateEmployeeDto,   // using same DTO for now
  ) {
    return this.employeeService.updateEmployee(Number(id), data);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(Number(id));
  }
}