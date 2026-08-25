import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello() {
    return 'Hello from NestJS!';
  }

  @Put('user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return {
      message: 'User updated successfully',
      id: id,
      updatedData: data,
    };
  }
}