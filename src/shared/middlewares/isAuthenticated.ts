import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ITokenPayload } from "../../modules/admin/models";

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token inválido");
  }

  const [, token] = authHeader.split(" ");

  const secret = process.env.SECRET;
  const decodedToken = verify(token, `${secret}`);

  if (!decodedToken) {
    throw new Error("Token inválido");
  }

  const { id } = decodedToken as ITokenPayload;

  request.userId = id;

  return next();
}
