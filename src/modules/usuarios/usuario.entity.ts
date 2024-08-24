import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../../common/enums/rolEnum';


@Entity('usuarios')
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;

  @Column({ type: 'enum', enum: Roles})
  role: Roles;
}