/**
 * Interface representing the error response structure.
 *
 * @interface ErrorResponse
 *
 * @author Yunmi Jung
 * @date 2024-08-19
 *
 * @example
 * const errorResponse: ErrorResponse = {
 *   code: 404,
 *   description: "Invalid body data."
 * };
 *
 * @property {number} code - The HTTP status code of the error.
 * @property {string} message - A description of the error.
 */

export interface ErrorResponse {
  code: number;
  description: string;
}

import { NextFunction, Request, Response } from 'express';
// src/middleware/errorHandler.ts

// 글로벌 에러 처리 미들웨어
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // CustomError 인스턴스인지 확인하고, 맞다면 상태 코드와 메시지를 사용
  if (err instanceof CustomError) {
    res.status(err.status).json({
      code: err.status,
      message: err.message
    });
  } else {
    // 다른 에러의 경우 기본값을 사용
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
  }
}

// CustomError.ts
export class CustomError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
