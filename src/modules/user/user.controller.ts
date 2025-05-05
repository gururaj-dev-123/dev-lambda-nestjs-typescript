import { Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import {Response} from 'express'

@ApiTags('User Info')
@Controller('v1')
export class UserController {
    constructor(@Inject(UserService)private readonly userSrv:UserService,){}
    @Get('/')
    async userList(): Promise<any>{
        const getResponse = await this.userSrv.user();
        return getResponse;
    }
    @Post('/')
    async createUser(): Promise<any>{
        const getResponse = await this.userSrv.createUser();
        return getResponse;
    }
}
