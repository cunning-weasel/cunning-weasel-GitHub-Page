"use strict";

// search input
const searchInput = document.querySelector(".searchBox");

// pretty navbar
let prevPos = window.pageYOffset;
window.onscroll = () => {
  let currentPos = window.pageYOffset;
  // console.log(prevPos + " previous Pos");
  if (prevPos > currentPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevPos = currentPos;
};

// click event for darkmode
// const darkLight = () => {
//   const docBod = document.body;
//   docBod.classList.toggle("dark-mode");
// };

// start api call
const api_url = "https://api.github.com/users/cunning-weasel/repos";

async function getData() {
  const response = await fetch(api_url);
  let data = await response.json();
  // console.log(data);
  let output = "";
  data.forEach((item) => {
    const gitUrl = item.html_url;
    const projDescr = item.description;
    const projectName = item.name;
    const projectLang = item.language;

    output += `<div>
                    <div>
                      <h2> ${projectName} </h2>
                    </div>
                    <div>
                      <p>${projectLang}</p>
                    </div>
                    <div>
                    <p>${projDescr}</p>
                  </div>
                    <div>
                      <a href="${gitUrl}" target="_blank">Repository</a>
                    </div>
                </div>`;
  });
  document.getElementById("projects-sub").innerHTML = output;
}
getData();

// search logic
let searchStr = "";

searchInput.addEventListener("keyup", (e) => {
  searchStr = e.target.value;
  console.log(searchStr);
});


/*
  // start data-viz
  // segment by lang, commits, pushes, collaborators?
  // console.log(d3); 
  console.log(data[0].language, data[1].language);
  // let lang = [data[0].language, data[1].language], comms = [], push = [], collabs = [];

  d3.select("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (d) => d)
}
*/
