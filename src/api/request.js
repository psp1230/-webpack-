import axios from "axios";
// const cors = 'https://cors-anywhere.herokuapp.com/';
const API_BASE_URL = "https://challenge.thef2e.com/api";
// 創建axios實例
const request = axios.create({
  baseURL: API_BASE_URL, // api的base_url
  // withCredentials: true, // 跨域請求時是否發送cookies
  headers: {
    Authorization:
      "Bearer SlXtETgNGt3Hw3YH5hYRC4M8p1WccmENY1sa0zB1bN1YZ4CqHn1zpZnHQHUu",
  },
});

// 請求攔截器
request.interceptors.request.use(
  (config) => {
    // 請求前做點什麼？
    // if (!config.data) {
    //     config.data = {};
    // }
    // console.log('請求前');
    // // console.log(config)
    // // 設置公共參數
    // console.log(qs.stringify(config.data));

    return config;
  },
  (error) => {
    // 處理請求錯誤
    console.log(error); // 用於調試
    return Promise.reject(error);
  }
);

// 響應攔截器
request.interceptors.response.use(
  (response) => {
    // let res = respone.data; // 如果返回的結果是data.data的，嫌麻煩可以用這個，return res
    // console.log('這是誰?');
    return response;
  },
  (error) => {
    console.log("error：" + error); // 用於調試
    return Promise.reject(error);
  }
);

export default request;
