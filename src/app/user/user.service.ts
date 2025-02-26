import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface"

@Injectable() 
export class UserService {
    private users: User[] = [];

    getUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find((user:User) => user.id === id);
    }

    createUser(name: string, surname:string) {
        const newUser = { id: this.users.length + 1, fullname: `${name} ${surname}` };
        this.users.push(newUser);
        return newUser;
    }
}