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
  update,
  query,
  orderByChild,
  limitToFirst,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { FB_GAMEDB } from "./fb_io.mjs";
// import { FB_GAMEDB, GUY_DB } from "./fb_io.mjs";

// Writes data to a path
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

// Reads data from a specific object
function fb_read(path) {
  const dbRef = ref(FB_GAMEDB, path);
  get(dbRef)
    .then((snapshot) => {
      var fb_data = snapshot.val();

      if (fb_data != null) {
        console.info(fb_data);
        document.getElementById("p_fbReadRec").innerHTML = fb_data;
        // return fb_data;
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

// Read data from a path, returns an object
function fb_read_path(path) {
  const dbRef = ref(FB_GAMEDB, path);
  get(dbRef)
    .then((snapshot) => {
      var fb_data = snapshot.val();

      if (fb_data != null) {
        console.info(fb_data);
        document.getElementById("p_fbReadAll").innerHTML = fb_data;
        // return fb_data;
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

function fb_update(path, data) {
  const dbRef = ref(FB_GAMEDB, path);
  update(dbRef, data)
    .then(() => {
      console.log("Data written to " + path + " successfully.");
    })
    .catch((error) => {
      throw "Error: " + error;
    });
}

function fb_readSorted(path) {
  const dbRef = query(
    ref(FB_GAMEDB, path),
    orderByChild("order"),
    limitToFirst(10)
  );
  // get(dbRef)
  //   .then((snapshot) => {
  //     var fb_data = snapshot.val();
  //     if (fb_data != null) {
  //       console.info(fb_data);
  //       document.getElementById("p_fbReadSorted").innerHTML = fb_data;
  //     } else {
  //       throw "The data is null";
  //     }
  //   })
  //   .catch((error) => {
  //     throw "Error: " + error;
  //   });
}

// function fb_yeet() {
//   const dbRef = ref(GUY_DB, "/");
//   remove(dbRef)
//     .then(() => {
//       console.log("Successfully removed the record");
//       document.getElementById("p_fbDeleteRec").innerHTML = "Record removed";
//     })
//     .catch((error) => {
//       console.log("Error removing the record: " + error);
//     });
// }

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

// export { fb_write, fb_read, fb_read_path, fb_update, fb_yeet };
export { fb_write, fb_read, fb_read_path, fb_update, fb_readSorted };

/**************************************************************/
// END OF CODE
/**************************************************************/
