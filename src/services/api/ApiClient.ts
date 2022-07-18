import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import {
  ApiResponse,
  type HeadersDefaults,
  type IApiClient,
} from "../../common/api";

type ApiClientParams = {
  baseUrl: string;
  timeoutMs: number;
};

// This client was implemented using Axios
export class ApiClient implements IApiClient {
  baseUrl: string;
  timeoutMs: number;
  headers: HeadersDefaults = {
    common: { Accept: "application/json, text/plain, */*" },
    delete: {},
    get: {},
    head: {},
    patch: { "Content-Type": "application/json" },
    post: { "Content-Type": "application/json" },
    put: { "Content-Type": "application/json" },
  };

  instance: AxiosInstance;

  constructor({ baseUrl, timeoutMs }: ApiClientParams) {
    this.baseUrl = baseUrl;
    this.timeoutMs = timeoutMs;

    this.instance = axios.create({
      timeout: this.timeoutMs,
    });
  }

  get = async <T = any, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> => {
    return this.instance
      .get<T, AxiosResponse<T>, D>(url, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.get),
        data: data,
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  delete = async <T = any, D = any>(url: string): Promise<ApiResponse<T>> => {
    return this.instance
      .delete<T, AxiosResponse<T>, D>(url, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.delete),
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  head = async <T = any, D = any>(url: string): Promise<ApiResponse<T>> => {
    return this.instance
      .head<T, AxiosResponse<T>, D>(url, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.head),
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  options = async <T = any, D = any>(url: string): Promise<ApiResponse<T>> => {
    return this.instance
      .options<T, AxiosResponse<T>, D>(url, {
        baseURL: this.baseUrl,
        headers: this.headers.common,
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  post = async <T = any, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> => {
    return this.instance
      .post<T, AxiosResponse<T>, D>(url, data, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.post),
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  put = async <T = any, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> => {
    return this.instance
      .put<T, AxiosResponse<T>, D>(url, data, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.put),
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };

  patch = async <T = any, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> => {
    return this.instance
      .patch<T, AxiosResponse<T>, D>(url, data, {
        baseURL: this.baseUrl,
        headers: Object.assign(this.headers.common, this.headers.patch),
      })
      .then(
        ({ data, status: statusCode }) => new ApiResponse({ data, statusCode })
      )
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new ApiResponse({
          data: error.response,
          statusCode: error.response.status,
        });
      });
  };
}
