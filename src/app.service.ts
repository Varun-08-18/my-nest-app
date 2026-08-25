import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    {
      id: 21,
      name: 'Varun',
      department: 'IT',
      project: 'NestJS',
      rank: 1,
    },
    {
      id: 22,
      name: 'Rahul',
      department: 'HR',
      project: 'Recruitment',
      rank: 2,
    },
  ];

  getAll() {
    return this.employees;
  }

  getOne(id: number) {
    return this.employees.find(
      (employee) => employee.id === id,
    );
  }

  create(employee: any) {
    this.employees.push(employee);
    return employee;
  }

  update(id: number, data: any) {
    const employee = this.employees.find(
      (employee) => employee.id === id,
    );

    if (!employee) {
      return 'Employee not found';
    }

    Object.assign(employee, data);

    return employee;
  }

  delete(id: number) {
    const index = this.employees.findIndex(
      (employee) => employee.id === id,
    );

    if (index === -1) {
      return 'Employee not found';
    }

    return this.employees.splice(index, 1);
  }
}