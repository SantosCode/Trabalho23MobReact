import axios, {AxiosError} from "axios";
import {EventMediator} from "src/utils/events";
import {EventTypes} from "src/utils/event-types";

export const basePath = "storeProducts";

const EXPIRED_TOKEN_MESSAGE = "jwt expired";

const request = axios.create({
  baseURL: "https://fiap-reactjs-presencial.herokuapp.com",
  timeout: 10000,
});

request.interceptors.response.use(
  response => {
    return response;
  },
  async (error: AxiosError) => {
    const {message} = error.response?.data;

    if (message !== undefined && message === EXPIRED_TOKEN_MESSAGE) {
      EventMediator.send(EventTypes.LOGOUT);
    }

    throw error;
  },
);

export {request};
