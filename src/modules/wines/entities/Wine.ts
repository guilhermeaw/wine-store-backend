import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wines')
export default class Wine {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column()
    title: string;

  @Column()
    description: string;

  @Column()
    img: string;

  @Expose({ name: 'imageUrl' })
  getImage(): string | null {
    if (!this.img) {
      return null;
    }

    return `http://localhost:3333/files/${this.img}`;
  }
}
