import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";


@Injectable() 
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.userRepository.findOneBy({id});
    }

    async delete(id: number){
       await this.userRepository.delete(id);
    }
   
    update(id: number, user: User){
        return this.userRepository.update(id, user);
    }

    createUser(name: string, surname: string) {
        const user = this.userRepository.create({name, surname});
        return this.userRepository.save(user);
    }
}