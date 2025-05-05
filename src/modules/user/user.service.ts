import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
    
    ){}
    async user(): Promise<any>{

        return{
            status:200,
            userInfo:{
                name:'Gururaj',
                gender:'Male'
            }
        }
    }
}
