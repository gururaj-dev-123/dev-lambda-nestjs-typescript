import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import {Response} from 'express'

@ApiTags('User Info')
@Controller('v1')
export class UserController {
    constructor(private readonly userSrv:UserService,){}
    @Get('/')
    async userInfo(): Promise<any>{
        const getResponse = await this.userSrv.user();
        return getResponse;
    }

}
