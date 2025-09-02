import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './user';
import { Contribution } from './contribution';

@Entity({ name: 'pockets' })
export class Pocket {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  target_amount!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  current_amount!: number;

  @Column({ type: 'date', nullable: true })
  target_date?: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  category?: string;

  @Column({ type: 'varchar', length: 7, default: '#3B82F6' })
  color!: string;

  @Column({ type: 'boolean', default: false })
  is_archived!: boolean;

  @ManyToOne(() => User, (user) => user.pockets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'uuid' })
  user_id!: string;

  @OneToMany(() => Contribution, (contribution) => contribution.pocket, {
    cascade: true,
    eager: false,
  })
  contributions!: Contribution[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  // Virtual property to calculate progress percentage
  get progress_percentage(): number {
    if (this.target_amount <= 0) return 0;
    return Math.min(100, (this.current_amount / this.target_amount) * 100);
  }

  // Virtual property to check if goal is achieved
  get is_goal_achieved(): boolean {
    return this.current_amount >= this.target_amount;
  }

  // Virtual property to calculate remaining amount
  get remaining_amount(): number {
    return Math.max(0, this.target_amount - this.current_amount);
  }
}
