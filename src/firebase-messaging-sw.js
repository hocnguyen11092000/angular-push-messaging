// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCkYqZ5bHBAinPu-ABha0ijvuqc0xIw-kk",
  authDomain: "angular-messaging-44560.firebaseapp.com",
  projectId: "angular-messaging-44560",
  storageBucket: "angular-messaging-44560.appspot.com",
  messagingSenderId: "403678739788",
  appId: "1:403678739788:web:069c91950179448ae3e3e9",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
