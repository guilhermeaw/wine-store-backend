import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export enum UserRole {
  ADMIN = "admin",
  USER = "user"
}

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column()
    name: string;

  @Column()
    login: string;

  @Column('enum', { enum: UserRole })
    role: UserRole;

  @Column()
  @Exclude()
    password: string;
}
