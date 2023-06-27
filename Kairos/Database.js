// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD70t2emgqoxx9fkZomlbvjt0OVPbREm6s",
    authDomain: "kairos-10fdd.firebaseapp.com",
    databaseURL: "https://kairos-10fdd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kairos-10fdd",
    storageBucket: "kairos-10fdd.appspot.com",
    messagingSenderId: "579747836516",
    appId: "1:579747836516:web:c5464abf83b83a7b1f2571",
    measurementId: "G-8L7CQ7VFL3",
    };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  const Cart = document.querySelector(".Cart");

  Cart.addEventListener("click", function() {
    console.log("bento added to cart")
  });
