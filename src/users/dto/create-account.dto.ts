import { IsEmail, IsEnum, IsString } from "class-validator";
import { User } from "../entities/user.entity";

enum UserRole {
    Client = 'client',
    Owner = 'owner'
}

export class CreateAccount {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    role: UserRole
}