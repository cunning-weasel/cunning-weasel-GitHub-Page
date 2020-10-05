"use strict";

// pretty navbar
let prevPos = window.pageYOffset;
window.onscroll = function () {
  let currentPos = window.pageYOffset;
  // console.log(prevPos + " previous Pos");            
  if (prevPos > currentPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevPos = currentPos;
}

// start GH API projects-page integration
// "id", "git_url", "name", "language" 

const api_url = "https://api.github.com/users/cunning-weasel/repos";
async function getData() {
  const response = await fetch(api_url);
  let data = await response.json();
  // console.log(data[0].git_url, data[0].name, data[0].language);
  let output = "";
  for(let i = 0; i < data.length; i++) {
    // console.log(data[i].git_url);
    output += "<div>" + data[i].git_url + "<div>" + "<div>" + data[i].name + "<div>" + "<div>" + data[i].language + "<div>";
  }
  document.getElementById("projects-sub").innerHTML = output;
}

getData();

  // document.getElementById("projects-sub").textContent = 

// fetch("https://api.github.com/users/cunning-weasel/repos")
//   .then(response => response.json()) // convert response to json
//   .then(data => { // json object i need!
//     document.getElementById("projects-sub").innerHTML = JSON.stringify(data); // textContent instead?
//   })


/*
const req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/cunning-weasel/repos", true);
req.send();
req.onload = function () {
  const json = JSON.parse(req.responseText);
  let html = "";
  json.forEach(function (val) {
    const keys = Object.keys(val);
    html += "<div id = 'test'>";
    keys.forEach(function (key) {
      html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
    });
    html += "</div><br>";
  });
  document.getElementById("projects-sub").innerHTML = html;
}

Repos end-point:
api.github.com/orgs/users/cunning-weasel/repos || https://api.github.com/users/cunning-weasel/repos
get JSON to send response to GH API. Once data is there, can loop api.jquery.com
play around, since I need li item, then I can get a link:
https://api.github.com/users/cunning/repos
https://api.jquery.com/jQuery.getJSON/ 


// start data-visualizations to segment lang, location

*/


