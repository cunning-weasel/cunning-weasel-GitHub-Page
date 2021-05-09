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
};

const api_url = "https://api.github.com/users/cunning-weasel/repos";
async function getData() {
  const response = await fetch(api_url);
  let data = await response.json();
  // console.log(data[0].git_url, data[0].name, data[0].language);
  let output = "";
  for (let i = 0; i < data.length; i++) {
    data.forEach((item) => {
      let gitUrl = item.git_url;
      let projectName = item.name;
      let projectLang = item.language;

      output += `<div>
                    <h1> ${projectName} </h1>
                  <div>
                  <p> ${projectLang} </p>
                  </div>
                  <div>
                    <a href="${gitUrl}">GitHub Repo</a>
                  </div>
                </div>`;
    });
    document.getElementById("projects-sub").innerHTML = output;
  }
}
getData();

// add search bar 
// async function searchBar() {
//   const response = await fetch(api_url);
//   let data = await response.json();
//   // console.log(data[0].git_url);
//   let output = "";
//   for (let i = 0; i < .length; i++) {
//     .forEach((item) => {

//       output += `<div>
//                     <h1>${projectName}</h1>
//                   <div>
//                   <p>${projectLang}</p>
//                   </div>
//                   <div>
//                     <a href="${gitUrl}">GitHub Repo</a>
//                   </div>
//                 </div>`;
//     });
//     document.getElementById("projects-sub").innerHTML = output;
//   }
// }
// searchBar();

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
