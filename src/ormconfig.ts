import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { TagEntity } from './tag/tag.entity';
import { CreateTags1723611202158 } from './migrations/1723611202158-CreateTags';
import { UserEntity } from './user/user.entity';
import { CreateUsers1724046179427 } from './migrations/1724046179427-CreateUsers';
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'medium',
  password: '123',
  database: 'medium',
  entities: [TagEntity, UserEntity],
  synchronize: false,
  migrations: [CreateTags1723611202158, CreateUsers1724046179427],
};

export default config;
