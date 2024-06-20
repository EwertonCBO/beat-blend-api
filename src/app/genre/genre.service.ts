import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GenreEntity } from "./entities/genre.entity";
import { GenreDto } from "./dto/genre.dto";

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) { }

  async findAll() {
    return await this.genreRepository.find();
  }

  async findById(id: number) {
    try {
      return await this.genreRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Not found user with id ${id}`);
    }
  }

  async update(id: number, data: GenreDto) {
    try {
      const user = await this.genreRepository.findOneOrFail({ where: { id } });
      this.genreRepository.merge(user, data);
      return await this.genreRepository.save(user);
    } catch (error) {
      throw new NotFoundException(`Error in update user with id ${id}`);
    }
  }

  async create(data: GenreDto) {
    try{
      const user = this.genreRepository.create(data);
      return await this.genreRepository.save(user);
    } catch (err) {
      console.log(err)
    }
    
  }

  async delete(id: number) {
    try {
      const user = await this.genreRepository.findOneOrFail({ where: { id } });
      return await this.genreRepository.softRemove(user);
    } catch (error) {
      throw new NotFoundException(`Error in delete user with id ${id}`);
    }
  }
}
