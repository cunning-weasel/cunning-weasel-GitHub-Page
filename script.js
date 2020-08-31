/* 
When the user scrolls down, hide the navbar. When the user scrolls up/ down again, show the navbar
Object needs to tie to onscroll event, with a func that takes the script
The onscroll event executes js when div elem. tag is being scrolled. place in elem as attri and reference navbar id
*/

// prevScrollpos is variable to store previous scroll positon
let prevScrollpos = window.pageYOffset; 

window.onscroll = function() {
// currentScrollPos is variable to store current scroll positon
  let currentScrollPos = window.pageYOffset; // pageYOffset returns the pixels in the current doc scrolled - horiznontally on X axis (pageXOffset)
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px"; // check why navbar doesn't auto-hide - investigate with overflow?
  }
  prevScrollpos = currentScrollPos;
}

