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

// start GH API call 
// => "git_url", "name", "language" 

const api_url = "https://api.github.com/users/cunning-weasel/repos";
async function getData() {
  const response = await fetch(api_url);
  let data = await response.json();
  // console.log(data[0].git_url, data[0].name, data[0].language);
  let output = "";
  for(let i = 0; i < data.length; i++) {
    output += "<div>" + "<li>" + data[i].git_url + "</li>" + "<li>" + data[i].name + "</li>" + "<li>" + data[i].language + "</li>" + "</div>";
  } // add button to CT to specific repo
  document.getElementById("projects-sub").innerHTML = output;
  // document.getElementById("projects-sub").textContent = output; - safer?

  // start data-viz
  // segment by lang, commits, pushes, collaborators?
  // console.log(d3); 
  console.log(data[0].language, data[1].language);
  let lang = [data[0].language, data[1].language], comms = [], push = [], collabs = [];
  

  d3.select("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (d) => d)

}
getData();





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

*/


