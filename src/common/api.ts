type RequestHeaders = Record<string, string | number | boolean>;

export type HeadersDefaults = {
  common: RequestHeaders;
  delete: RequestHeaders;
  get: RequestHeaders;
  head: RequestHeaders;
  post: RequestHeaders;
  put: RequestHeaders;
  patch: RequestHeaders;
  options?: RequestHeaders;
  purge?: RequestHeaders;
  link?: RequestHeaders;
  unlink?: RequestHeaders;
};

export interface IApiClient {
  timeoutMs: number;

  get<T = any, D = any>(url: string, data?: D): Promise<ApiResponse<T>>;
  delete<T = any>(url: string): Promise<ApiResponse<T>>;
  head<T = any>(url: string): Promise<ApiResponse<T>>;
  options<T = any>(url: string): Promise<ApiResponse<T>>;
  post<T = any, D = any>(url: string, data?: D): Promise<ApiResponse<T>>;
  put<T = any, D = any>(url: string, data?: D): Promise<ApiResponse<T>>;
  patch<T = any, D = any>(url: string, data?: D): Promise<ApiResponse<T>>;
}

export class ApiResponse<D = any> {
  public statusCode: number;
  public data: D;

  constructor({ data, statusCode }: ApiResponse) {
    this.statusCode = statusCode;
    this.data = data;
  }
}

export class ApiError extends ApiResponse {
  constructor(data: ApiError) {
    super(data);
  }
}

