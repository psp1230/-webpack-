import "jquery";
import "../css/main.css";
import { getAllRoomInfo } from "../api/index";

async function getRoomData() {
  const roomData = await getAllRoomInfo();
  console.log(roomData);
}

getRoomData();
