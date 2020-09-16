"use strict";

// pretty navbar
let prevPos = window.pageYOffset;
// console.log(prevPos + " previous Global");
window.onscroll = function () {
  let currentPos = window.pageYOffset;
  // window.onscroll = function () {console.log (1) }; 
  // console.log(currentPos + " current Pos");
  // console.log(prevPos + " previous Pos");            - need another debugging method tbh
  if (prevPos > currentPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevPos = currentPos;
}

// start GH API projects-page integration

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
  };


    // fetch("https://api.github.com/users/cunning-weasel/repos")
    //   .then(response => response.json()) // convert response to json
    //   .then(data => { // json object i need!
    //     document.getElementById("projects-sub").innerHTML = JSON.stringify(data); // textContent instead?
    //   })

    /*
    const req = new XMLHttpRequest();
    req.open("GET","https://api.github.com/users/cunning-weasel/repos",true);
    req.send();
    req.onload = function() {
      const json = JSON.parse(req.responseText);
      document.getElementById("projects-sub").innerHTML = JSON.stringify(json);
    };

    https://api.github.com/users/cunning-weasel/repos

    GH REST API:
    no need for token (thank gawd)

    Repos end-point:
    api.github.com/orgs/users/cunning-weasel/repos || https://api.github.com/users/cunning-weasel/repos
    get JSON to send response to GH API. Once data is there, can loop api.jquery.com
    play around, since I need li item, then I can get a link:
    https://api.github.com/users/cunning/repos
    https://api.jquery.com/jQuery.getJSON/ 


    let allRepos = [];

    allRepos.push({
      name: "name",
      description: description,
      ...
    })
    */

    // start GH API projects-page integration

    // start data-visualizations to segment lang, location 