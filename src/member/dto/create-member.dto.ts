import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator' ;

export class CreateMemberDto {
     id: number ;

     @IsNotEmpty()
     @IsString()
     firstname: string ;

     @IsNotEmpty()
     @IsString()
     lastname:string ;

     @IsNotEmpty()
     @IsEmail()
     email:string ;

     tel:string ;
}
