//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

console.log("%c fb_io.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
export let FB_GAMEDB, FB_GAMEAPP;
// export let GUY_DB, GUY_APP;

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
  databaseURL:
    "https://comp-2025-george-leask-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// const GUY_CONFIG = {
//   apiKey: "AIzaSyCkKH0pJ-Fo9axQNsBswxIwZyuruG1X6ts",
//   authDomain: "comp-2025-idrees-munshi-24d0e.firebaseapp.com",
//   databaseURL:
//     "https://comp-2025-idrees-munshi-24d0e-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "comp-2025-idrees-munshi-24d0e",
//   storageBucket: "comp-2025-idrees-munshi-24d0e.firebasestorage.app",
//   messagingSenderId: "811934625308",
//   appId: "1:811934625308:web:a1ff1ffffdcab01bcd79d9",
//   measurementId: "G-7P3VZN9ZFD",
// };

async function fb_initialise() {
  FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
  FB_GAMEDB = getDatabase(FB_GAMEAPP);

  // GUY_APP = initializeApp(GUY_CONFIG);
  // GUY_DB = getDatabase(GUY_APP);
  // console.info(GUY_DB);

  //   const analytics = getAnalytics(app);
  console.info(FB_GAMEDB);

  document.getElementById("p_fbInitialise").innerHTML = "Initialised";
  document.getElementById("button_fbInitialise").setAttribute("disabled", true);
  document.getElementById("button_fbInitialise").innerHTML = "Initialised";
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_initialise };

/**************************************************************/
// END OF CODE
/**************************************************************/
