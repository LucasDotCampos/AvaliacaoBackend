import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

@Entity("avaliation")
class AvaliationEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  sector: string;

  @Column()
  company: string;

  @Column()
  device: string;

  @Column()
  avaliation: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}

export default AvaliationEntity;
