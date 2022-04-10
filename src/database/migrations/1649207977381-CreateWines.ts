import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWines1649207977381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'wines',
        columns: [{
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'img',
          type: 'varchar',
        },
        {
          name: 'price',
          type: 'numeric',
          precision: 12,
          scale: 2,
        },
        {
          name: 'description',
          type: 'text',
        }],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('wines');
  }
}
