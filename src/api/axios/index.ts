import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { ApiResult } from "@/api/interface";
// 创建一个 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 10 * 1000, // 10s 请求超时
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    // const { method, url, params, data } = config;
    // console.log("请求拦截器", { method, url, params, data });
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

// 封装get请求方法
const get = async <T>(url: string): Promise<ApiResult<T>> => {
  const config = {
    headers: {
      "platform-type": "MULTI",
    },
    param: {},
  };
  const res = await service.get<ApiResult<T>>(url, config);
  return res.data;
};
// 封装post请求方法
const post = async <T>(url: string, params: any): Promise<ApiResult<T>> => {
  const config = {
    headers: {
      "platform-type": "MULTI",
    },
  };
  const res = await service.post<ApiResult<T>>(url, params, config);
  return res.data;
};

export { post, get };
