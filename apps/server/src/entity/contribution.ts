import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pocket } from './pocket';
import { User } from './user';

@Entity({ name: 'contributions' })
export class Contribution {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount!: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 50, default: 'manual' })
  type!: 'daily' | 'weekly' | 'monthly';

  @Column({ type: 'date' })
  contribution_date!: Date;

  @ManyToOne(() => Pocket, (pocket) => pocket.contributions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pocket_id' })
  pocket!: Pocket;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
