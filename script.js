/* 

When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

onscroll event executes js when div elem. tag is being scrolled. in markup, needs to be placed in elem as attri and reference
the script

in js, object needs to tie to onscroll event, with a func that takes a script

pageYOffset returns the pixels in the durrent doc has been scrolled horiznontally or vertically (pageXOffset)

*/

let prevScrollpos = window.pageYOffset; 
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset; 
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px"; // double check why navbar doesn't auto-hide
  }
  prevScrollpos = currentScrollPos;
}



