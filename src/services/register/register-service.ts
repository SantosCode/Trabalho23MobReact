import {AxiosError} from "axios";
import {request, basePath} from "src/services/request";
import {RegisterRequest} from "src/services/register/register-request";
import {ServiceError} from "src/services/service-error";
import {RegisterResponse} from "src/services/register/register-response";

export const register = async (
  requestData: RegisterRequest,
): Promise<RegisterResponse> => {
  const path = `/${basePath}/signup`;

  try {
    const response = await request.put<RegisterResponse>(path, requestData);

    return response.data;
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message);
  }
};
