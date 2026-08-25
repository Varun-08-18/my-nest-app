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

@Controller('employee')
export class EmployeeController {

  @Get()
  getEmployees() {
    return this.employeeService.getEmployee();
  }

  @Post()
  createEmployee(@Body() employee: any) {
    return this.employeeService.createEmployee(employee);
  }


  @Put(':id')
  updateEmployee(
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.employeeService.updateEmployee(
      Number(id),
      data,
    );
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(
      Number(id),
    );
  }

  constructor(private readonly employeeService: EmployeeService) {}
}