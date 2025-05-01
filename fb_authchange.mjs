//**************************************************************/
// fb_auth.mjs
// Firebase authchange module
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = "white"; // These two const are part of the coloured
const COL_B = "#CD7F32"; //  console.log for functions scheme
console.log("%c fb_authchange.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

//**********************************
// Firebase auth

function fb_authchange() {
  const AUTH = getAuth();

  // this function auto-triggers, having it as a button is pointless
  onAuthStateChanged(
    AUTH,
    (user) => {
      if (user) {
        console.info(
          "The user " + user.displayName + " is signed in: " + user.email
        );
      } else {
        console.info("No user is signed in");
      }
    },
    (error) => {
      console.info("Error in authchange: " + error);
    }
  );
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_authchange };

/**************************************************************/
// END OF CODE
/**************************************************************/
