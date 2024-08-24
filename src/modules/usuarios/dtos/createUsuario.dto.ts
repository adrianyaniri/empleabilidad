import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

}