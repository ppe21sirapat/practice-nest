import { IsEmail, IsNotEmpty, IsString,IsPhoneNumber } from 'class-validator' ;

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

     @IsPhoneNumber('TH')
     tel:string ;
}
