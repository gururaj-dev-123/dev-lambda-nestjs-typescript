import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
    
    ){}
    // get users list
    async user(): Promise<any>{

        return{
            status:200,
            userInfo:{
                name:'Gururaj',
                gender:'Male'
            }
        }
    }

    // create new user 
    async createUser(): Promise<any>{

        // add your logic to create user
        return{
            status:200,
            message:'User created successfully'
        }
    }
}
