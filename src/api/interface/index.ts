import { Multi } from "./multi";

export default Multi;

export interface ApiResult<T> {
  code: number;
  message: string;
  data: T;
}
