import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usuarios1724534130997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'usuarios',
              columns: [
                  {
                      name: 'id',
                      type: 'int',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment'
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isUnique: true
                  },
                  {
                      name: 'password',
                      type: 'varchar'
                  },
                  {
                      name: 'status',
                      type: 'boolean',
                      default: true
                  },
                  {
                      name: 'role',
                      type: 'enum',
                      enum: ['ADMIN', 'POSTULANTE', 'EMPRESA'],
                  }
              ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
