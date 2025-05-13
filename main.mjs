/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/

console.log("%c main.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise } from "./fb_io.mjs";
window.fb_initialise = fb_initialise;

import { fb_auth, fb_authchange, fb_logout } from "./fb_auth.mjs";
window.fb_auth = fb_auth;
window.fb_authchange = fb_authchange;
window.fb_logout = fb_logout;

import {
  fb_write,
  fb_read,
  fb_read_path,
  fb_update,
  fb_readSorted,
  fb_fillRandomData,
} from "./fb_readwrite.mjs";
window.fb_write = fb_write;
window.fb_read = fb_read;
window.fb_read_path = fb_read_path;
window.fb_update = fb_update;
window.fb_readSorted = fb_readSorted;
window.fb_fillRandomData = fb_fillRandomData;

import { fb_yeetAll } from "./fb_yeet.mjs";
window.fb_yeetAll = fb_yeetAll;

// window.fb_yeet = fb_yeet;

/**************************************************************/
// index.html main code
/**************************************************************/

/**************************************************************/
//   END OF CODE
/**************************************************************/
