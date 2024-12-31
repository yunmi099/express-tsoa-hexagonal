export interface CommonResponse<T extends Object> {
  code: number;
  data: T;
}
