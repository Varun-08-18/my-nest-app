import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // GET all employees
  @Get()
  getEmployees() {
    return this.employeeService.getEmployee();
  }

  // GET one employee by id  ← this is the new one
  @Get(':id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.getEmployeeById(id);
  }

  // POST
  @Post()
  createEmployee(@Body() employee: CreateEmployeeDto) {
    return this.employeeService.createEmployee(employee);
  }

  // PUT
  @Put(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, data);
  }

  // DELETE
  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}