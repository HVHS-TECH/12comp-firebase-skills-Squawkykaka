//**************************************************************/
// fb_logout.mjs
// Firebase writing module
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = "white"; // These two const are part of the coloured
const COL_B = "#CD7F32"; //  console.log for functions scheme
console.log("%c fb_write.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import {
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { FB_GAMEDB } from "./fb_io.mjs";

function fb_write(path, data) {
  const dbRef = ref(FB_GAMEDB, path);
  set(dbRef, data)
    .then(() => {
      console.info("Write succeeded.");
    })
    .catch((error) => {
      console.info("Write failed: " + error);
    });
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_write };

/**************************************************************/
// END OF CODE
/**************************************************************/
