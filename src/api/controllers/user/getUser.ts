import { Response } from 'express';
import { UserRequest } from './types';

export default (req: UserRequest, res: Response) => {
  res.json(req.user);
};
