import { UserEntity } from '../user.entity';
import { UserType } from './user.type';

export interface userResponceInterface {
  user: UserType & { token: string };
}
