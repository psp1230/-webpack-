import "jquery";
import "./main.css";
import { getAllRoomInfo } from "./api/index";

async function getRoomData() {
  const roomData = await getAllRoomInfo();
  console.log(roomData);
}

getRoomData();
