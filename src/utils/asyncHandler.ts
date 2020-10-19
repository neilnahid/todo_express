import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  RequestParamHandler,
} from 'express';

const asyncHandler = <
  Req extends Request = Request,
  Res extends Response = Response
>(
  handler: RequestHandler
) => (req: Req, res: Res, next: NextFunction) => {
  return Promise.resolve(handler(req, res, next)).catch(next);
};
const asyncParamHandler = <
  Req extends Request = Request,
  Res extends Response = Response
>(
  handler: RequestParamHandler
) => (req: Req, res: Res, next: NextFunction, id: any, name: string) => {
  return Promise.resolve(handler(req, res, next, id, name)).catch(next);
};
export { asyncHandler, asyncParamHandler };
