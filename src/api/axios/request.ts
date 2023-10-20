class Requset {
  abortControllerMap;

  constructor() {
    this.abortControllerMap = new Map();
  }

  setAbortController(key: string, abortController: AbortController) {
    this.abortControllerMap.set(key, abortController);
  }

  delAbortController(key: string) {
    this.abortControllerMap.delete(key);
  }

  // 取消所有未完成的请求
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort();
    }
    this.abortControllerMap.clear();
  }

  // 取消指定的请求
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url];
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort();
      this.delAbortController(_url);
    }
  }
}

export const request = new Requset();
