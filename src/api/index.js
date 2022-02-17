import request from "./request";

//[GET] 取得所有房型
export function getAllRoomInfo() {
  return request({
    method: "GET",
    url: "/thef2e2019/stage6/rooms",
  });
}

//[GET] 單一房型細節
export function getOneRoomInfo(id) {
  return request({
    method: "GET",
    url: `/thef2e2019/stage6/room/${id}`,
  });
}

//[POST] 預約房型
export function bookRoom(id, data) {
  return request({
    method: "POST",
    url: `/thef2e2019/stage6/room/${id}`,
    data,
  });
}

//[DELETE] 清除所有預約
export function cancelAllBooking() {
  return request({
    method: "DELETE",
    url: "/thef2e2019/stage6/room",
  });
}
