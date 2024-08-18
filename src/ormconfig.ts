import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { TagEntity } from './tag/tag.entity';
import { CreateTags1723611202158 } from './migrations/1723611202158-CreateTags';
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'medium',
  password: '123',
  database: 'medium',
  entities: [TagEntity],
  synchronize: false,
  migrations: [CreateTags1723611202158],
};

export default config;
