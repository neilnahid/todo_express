import { Request, Response } from 'express';

const mockRequest = <T extends Request>() => {
  const req = {} as T;
  req.body = jest.fn().mockReturnValue(req);
  return req;
};
const mockResponse = <T extends Response>() => {
  const res = {} as T;
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
export { mockRequest, mockResponse };
