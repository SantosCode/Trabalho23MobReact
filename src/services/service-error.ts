export class ServiceError extends Error {
  public constructor(
    public message: string = "Algo deu errado. Tente novamente.",
    public code?: string,
  ) {
    super();
  }
}
