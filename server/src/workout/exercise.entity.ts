import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'default_exercises' })
export class Exercise {
    @PrimaryGeneratedColumn({ name: 'default_exercise_id' })
    public exerciseId!: number;

    @Column({ name: 'name' })
    public name!: string;

    @Column({ name: 'user_id' })
    public userId!: string | null;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt!: Date;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt!: Date;
}
