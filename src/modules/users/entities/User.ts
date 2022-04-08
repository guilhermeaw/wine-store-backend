import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column()
    name: string;

  @Column()
    login: string;

  @Column()
  @Exclude()
    password: string;
}
