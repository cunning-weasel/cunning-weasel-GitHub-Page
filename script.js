/* 
After the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
*/
"use strict";

let prevPos = window.pageYOffset; // declare variable to store scroll positon globally
window.onscroll = function () {
  let currentPos = window.pageYOffset; // pageYOffset returns the pixels in the current doc scrolled vertically
  // window.onscroll = function () {console.log (1) }; confirm event is firing
  if (prevPos > currentPos) {
    // if previous scroll position is more than where the user currently is, return fully visible nav
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px"; // otherwise remove visibility by 50px
  }
  prevPos = currentPos; // set previous scroll position to current to call the funuction again 
}

// get repos in rss feed/ style?
// could store all projects, but need to find how to get them - and how to store them

/*

let allRepos = [];

allRepos.push({
  name: "name",
  description: description,
  ...
})

*/


