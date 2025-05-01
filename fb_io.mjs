//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = "white"; // These two const are part of the coloured
const COL_B = "#CD7F32"; //  console.log for functions scheme
console.log("%c fb_io.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
export let FB_GAMEDB, FB_GAMEAPP;

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

//**********************************
// Firebase configuration
const FB_GAMECONFIG = {
  apiKey: "AIzaSyAKJ4yC-PXdQfaWMQRMWumS85GaGPpvbLE",
  authDomain: "comp-2025-george-leask.firebaseapp.com",
  projectId: "comp-2025-george-leask",
  storageBucket: "comp-2025-george-leask.firebasestorage.app",
  messagingSenderId: "727231405255",
  appId: "1:727231405255:web:9f4f51e64681939067b2e2",
  measurementId: "G-3LTSMW0XGY",
};

async function fb_initialise() {
  FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
  FB_GAMEDB = getDatabase(FB_GAMEAPP);
  //   const analytics = getAnalytics(app);
  console.info(FB_GAMEDB);
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_initialise };

/**************************************************************/
// END OF CODE
/**************************************************************/
