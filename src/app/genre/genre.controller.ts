import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenreDto } from './dto/genre.dto';
import { GenreService } from './genre.service';

@Controller('api/v1/genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) { }

  @Get()
  async index() {
    return await this.genreService.findAll();
  }

  @Post()
  async create(@Body() body: GenreDto) {
    
    return await this.genreService.create(body);
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.genreService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: GenreDto) {
    return await this.genreService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.genreService.delete(id);
  }
}