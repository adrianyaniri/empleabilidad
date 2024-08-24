import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';
import { UpdateUsuarioDto } from './dtos/updateUsuarioDto';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
  ) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllUsuarios() {
    return await this.usuariosService.findAllUsuarios();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findUsuarioById(@Param('id') id: number) {
    return await this.usuariosService.findUsuarioById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuariosService.createUsuario(createUsuarioDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateUsuario(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuariosService.updateUsuarios(id, updateUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async removeUsuario(@Param('id') id: number) {
    return await this.usuariosService.removeUsuario(id);
  }

}
