import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @Render('test/test.ejs')
  test(): { name: string; age: number } {
    return { name: 'testName', age: 23 };
  }
}
