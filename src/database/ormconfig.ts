import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'wine_store',
  entities: [
    'src/modules/**/entities/*.ts',
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  migrationsTableName: 'migrations',
});
