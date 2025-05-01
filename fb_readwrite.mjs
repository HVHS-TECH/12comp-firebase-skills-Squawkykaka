//**************************************************************/
// fb_logout.mjs
// Firebase writing + reading module
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

console.log("%c fb_readwrite.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { FB_GAMEDB } from "./fb_io.mjs";

function fb_write(path, data) {
  const dbRef = ref(FB_GAMEDB, path);
  set(dbRef, data)
    .then(() => {
      console.info(data);
      console.info("Write succeeded.");
      document.getElementById("p_fbWriteRec").innerHTML = data;
    })
    .catch((error) => {
      console.info("Write failed: " + error);
    });
}

function fb_read(path) {
  const dbRef = ref(FB_GAMEDB, path);
  get(dbRef)
    .then((snapshot) => {
      var fb_data = snapshot.val();

      if (fb_data != null) {
        console.info(fb_data);
        document.getElementById("p_fbReadRec").innerHTML = fb_data;
        return fb_data;
      } else {
        console.error("That data is null");
        throw "That path does not exist";
      }
    })
    .catch((error) => {
      console.error("Request failed: " + error);
      throw "Request failed";
    });
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_write, fb_read };

/**************************************************************/
// END OF CODE
/**************************************************************/
