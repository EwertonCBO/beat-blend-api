import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenreUserEntity } from "./genre.user.entity";

@Entity({schema: 'public', name: 'genre'})
export class GenreEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;

  @OneToMany(() => GenreUserEntity, genre => genre.genresUser)
  genresUser: GenreUserEntity;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;

}
