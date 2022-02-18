import "jquery";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import { getAllRoomInfo } from "../api/index";

const hello = "Hello World";
$("#app").append(`<div class="test">${hello}</div>`);
$("#app").append("<div class='test-2'></div>");

const myCarousel = $("#carousel");
const carousel = new Carousel(myCarousel, {
  interval: 3000,
});
carousel.cycle();

async function getRoomData() {
  const roomData = await getAllRoomInfo();
  console.log(roomData);
}

getRoomData();
