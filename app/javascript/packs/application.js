
import * as Seats from './seats';
import * as SeatData from './seats_data.js';

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

function docReady(fn) {
     // see if DOM is already available
     if (document.readyState === "complete" || document.readyState === "interactive") {
         // call on next available tick
         setTimeout(fn, 1);
     } else {
         document.addEventListener("DOMContentLoaded", fn);
     }
 }  

 function loadJSON() {
     var seatDataInput = document.getElementById("seatdata");
     seatDataInput.value = JSON.stringify(SeatData.getData());
 }

docReady(loadJSON);

window.do_find = function() {
     console.log(document.getElementById("seatdata").value);
     const data = JSON.parse(document.getElementById("seatdata").value);
     const best_seat = Seats.find(data);
     console.log(best_seat);
     console.log(data.seats[result[0]]);

     var resultObj = document.getElementById("result");
     resultObj.innerText = best_seat;
}
