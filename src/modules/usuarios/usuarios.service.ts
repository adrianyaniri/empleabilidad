import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dtos/updateUsuarioDto';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';

@Injectable()
export class UsuariosService {

  async findAllUsuarios() {
    return 'This action returns all usuarios';
  }

  async findUsuarioById(id: number) {
    return `This action returns a #${id} usuario`;
  }

  async createUsuario(createUsuarioDto: CreateUsuarioDto) {
    return createUsuarioDto;
  }

  async updateUsuarios(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario with ${updateUsuarioDto}`;
  }

  async removeUsuario(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
