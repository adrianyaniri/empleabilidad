import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUsuarioDto {


  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}