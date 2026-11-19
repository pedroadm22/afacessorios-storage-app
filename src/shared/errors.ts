export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode = 400,
    public readonly code = 'BAD_REQUEST',
  ) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Registro não encontrado') {
    super(message, 404, 'NOT_FOUND');
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Não autorizado') {
    super(message, 401, 'UNAUTHORIZED');
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Sem permissão para esta ação') {
    super(message, 403, 'FORBIDDEN');
  }
}