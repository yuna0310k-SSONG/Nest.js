import { Zookeeper } from 'src/zookeeper/entities/zookeeper.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  systematics: string;
  @Column()
  count: number;

  @ManyToOne(() => Zookeeper, (zookeeper) => zookeeper.animals)
  zookeeper: Zookeeper; //하나 라서 배열x
}

//조련사
//조련사 1 : 동물 N
