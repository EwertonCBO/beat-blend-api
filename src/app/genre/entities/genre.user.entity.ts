import { CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "src/app/user/user.entity";
import { GenreEntity } from "./genre.entity";

@Entity({schema: 'public', name: 'genre_user'})
export class GenreUserEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, user => user.genresUser)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @ManyToOne(() => GenreEntity, genre => genre.genresUser)
  @JoinColumn({ name: "genre_id" })
  genresUser: GenreEntity;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;

}
