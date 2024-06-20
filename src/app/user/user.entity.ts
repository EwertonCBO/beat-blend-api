import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from 'bcryptjs';
import { GenreUserEntity } from "src/app/genre/entities/genre.user.entity";

@Entity({schema: 'public', name: 'user'})
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable:true})
  nickname: string;

  @Column({nullable:true})
  avatar: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => GenreUserEntity, genre => genre.genresUser)
  genresUser: GenreUserEntity;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
      this.password = hashSync(this.password, 10);
    }

}
