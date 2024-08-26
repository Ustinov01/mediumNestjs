import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { userResponceInterface } from './types/userResponce.interface';
import { LoginUserDto } from './dto/login.dto';
import { Request } from 'express';
import { ExpressRequestinterface } from '@app/types/expressRequest.interface';
import { User } from './decorators/user.decorator';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<userResponceInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserRespones(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<userResponceInterface> {
    console.log(loginUserDto);
    const user = await this.userService.login(loginUserDto);
    return this.userService.buildUserRespones(user);
  }

  @Get('user')
  async currenctUser(
    @User() user: UserEntity,
    @User('id') currentUserId: number,
  ): Promise<userResponceInterface> {
    console.log('userId', currentUserId);
    return this.userService.buildUserRespones(user);
  }
}
