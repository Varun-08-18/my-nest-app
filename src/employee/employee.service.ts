import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

  employee = [
    {
      id: 1,
      name: 'Aman',
      department: 'IT',
      project: 'Project A',
      rank: 'Developer',
    },
    {
      id: 2,
      name: 'Rahul',
      department: 'HR',
      project: 'Project B',
      rank: 'Manager',
    },
    {
      id: 3,
      name: 'Varun',
      department: 'Finance',
      project: 'Project C',
      rank: 'Analyst',
    },
    {
      id: 4,
      name: 'Rohit',
      department: 'Marketing',
      project: 'Project D',
      rank: 'Executive',
    },
    {
      id: 5,
      name: 'Sakshi',
      department: 'Sales',
      project: 'Project E',
      rank: 'Representative',
    },
  ];

  // GET
  getEmployee() {
    return this.employee;
  }
  getEmployeeById(id: number) {
  const employee = this.employee.find((emp) => emp.id === id);

  if (!employee) {
    return `Employee with id ${id} not found`;
  }

  return employee;
}

  // POST
  createEmployee(employee: any) {
    this.employee = [...this.employee, employee];

    return employee;
  }

  // PUT
  updateEmployee(id: number, data: any) {

    const employeeExists = this.employee.some(
      (employee) => employee.id === id
    );

    if (!employeeExists) {
      return 'Employee not found';
    }

    this.employee = this.employee.map((employee) =>
      employee.id === id
        ? { ...employee, ...data }
        : employee
    );

    return this.employee.find(
      (employee) => employee.id === id
    );
  }

  // DELETE
  deleteEmployee(id: number) {

    const employeeExists = this.employee.some(
      (employee) => employee.id === id
    );

    if (!employeeExists) {
      return 'Employee not found';
    }

    this.employee = this.employee.filter(
      (employee) => employee.id !== id
    );

    return 'Employee deleted';
  }
}