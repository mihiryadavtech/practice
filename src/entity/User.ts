import file from '../interfaces/file';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

enum Role {
  BUYER = 1,
  SELLER = 2,
}
enum Doc {
  ADHAAR = 1,
  PAN_CARD = 2,
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'fname', type: 'varchar', length: 50 })
  fname: string;

  @Column({ name: 'lname', type: 'varchar', length: 50 })
  lastName: string;

  @Column({ name: 'profile_photo', type: 'jsonb', nullable: true })
  profilePhoto: file;

  @Column({ name: 'mobile', type: 'varchar', length: 15, unique: true })
  mobile: number;

  @Column({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ name: 'role', type: 'enum', enum: Role, default: Role.BUYER })
  role: Role;

  @Column({ name: 'visiting_card', type: 'jsonb', nullable: true })
  visitingCard: file;

  @Column({ name: 'verified', type: 'boolean' })
  verified: boolean;

  @Column()
  age: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
