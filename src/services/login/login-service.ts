import {AxiosError} from "axios";
import {request, basePath} from "src/services/request";
import {LoginRequest} from "src/services/login/login-request";
import {ServiceError} from "src/services/service-error";
import {LoginResponse} from "src/services/login/login-response";

const INVALID_LOGIN_MESSAGE = "User Not Found";

const isUser = (data: any): data is LoginResponse => {
  return "token" in data && "name" in data && "phone" in data;
};

export const login = async (
  requestData: LoginRequest,
): Promise<LoginResponse> => {
  const path = `/${basePath}/login`;

  try {
    const response = await request.post(path, requestData);

    if (response.data.message === INVALID_LOGIN_MESSAGE) {
      throw new ServiceError("Login inválido");
    }

    if (isUser(response.data)) {
      return response.data;
    }

    throw new ServiceError("Algo deu errado. Tente novamente");
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message, error.code);
  }
};
