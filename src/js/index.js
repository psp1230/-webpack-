import "jquery";
import "../css/main.css";
import { getAllRoomInfo } from "../api/index";

const hello = "Hello World";
$("#app").before(`<div class="test">${hello}</div>`);

async function getRoomData() {
  const roomData = await getAllRoomInfo();
  console.log(roomData);
}

getRoomData();
