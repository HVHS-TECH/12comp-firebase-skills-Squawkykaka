//**************************************************************/
// fb_auth.mjs
// Firebase logout module
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = "white"; // These two const are part of the coloured
const COL_B = "#CD7F32"; //  console.log for functions scheme
console.log("%c fb_logout.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import {
  signOut,
  getAuth,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

//**********************************
// Firebase auth

function fb_logout() {
  const AUTH = getAuth();

  signOut(AUTH)
    .then(() => {
      console.info("Sign-out successful.");
    })

    .catch((error) => {
      console.info("Sign-out failed: " + error);
    });
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_logout };

/**************************************************************/
// END OF CODE
/**************************************************************/
