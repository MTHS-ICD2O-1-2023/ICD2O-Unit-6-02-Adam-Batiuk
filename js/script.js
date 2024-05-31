// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"
let counter = null
localStorage.setItem(counter, 0)

function cookieClicked() {
  console.log("test")
  let clicks = localStorage.getItem(counter)
  localStorage.setItem(counter, clicks)
  // print answer
  document.getElementById("answer").innerHTML = clicks
}