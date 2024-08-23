import { UserEntity } from '@app/user/user.entity';
import { Request } from 'express';

export interface ExpressRequestinterface extends Request {
  user?: UserEntity;
}
