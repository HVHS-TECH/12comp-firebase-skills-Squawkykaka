//**************************************************************/
// fb_auth.mjs
// Firebase auth module
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

console.log("%c fb_auth.mjs", "color: blue; background-color: white;");

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

//**********************************
// Firebase auth

function fb_auth() {
  const AUTH = getAuth();
  const PROVIDER = new GoogleAuthProvider();

  // The following makes Google ask the user to select the account

  PROVIDER.setCustomParameters({
    prompt: "select_account",
  });

  signInWithPopup(AUTH, PROVIDER)
    .then((result) => {
      console.info("authentication success, result: " + result);
      console.info(result.user);
      document.getElementById("p_fbLogin").innerHTML = result.user.displayName;
      document.getElementById("p_fbAuthenticate").innerHTML = true;
    })

    .catch((error) => {
      console.info("authentication fail, error: " + error);
    });
}

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

function fb_logout() {
  const AUTH = getAuth();

  signOut(AUTH)
    .then(() => {
      console.info("Sign-out successful.");
      document.getElementById("p_fbLogin").innerHTML = "n/a";
      document.getElementById("p_fbAuthenticate").innerHTML = false;
    })

    .catch((error) => {
      console.info("Sign-out failed: " + error);
    });
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

export { fb_auth, fb_authchange, fb_logout };

/**************************************************************/
// END OF CODE
/**************************************************************/
