import request from "./request";
const API_BASE_URL = "https://challenge.thef2e.com/api"

//[GET] 取得所有房型
export function getAllRoomInfoTest() {
  return request("/thef2e2019/stage6/rooms", {
    method: "GET",
    baseURL: API_BASE_URL,
    headers: {
      Authorization:
        "Bearer SlXtETgNGt3Hw3YH5hYRC4M8p1WccmENY1sa0zB1bN1YZ4CqHn1zpZnHQHUu",
    },
  });
}