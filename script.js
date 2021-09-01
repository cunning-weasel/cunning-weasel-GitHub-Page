"use strict";

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

// start search input/ api render
const searchInput = document.querySelector(".searchBox");
let repoList = document.querySelector("#projects-sub");
let repos = [];

// search logic
searchInput.addEventListener("keyup", (e) => {
  const searchStr = e.target.value.toLowerCase();

  const filteredRepos = repos.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(searchStr) || (repo.language && repo.language.toLowerCase().includes(searchStr)) || 
      // have no idea why this is failing tbh
      (repo.description && repo.description.toLowerCase().includes(searchStr))
    );
  });
  shoRepos(filteredRepos);
});

// api call
const pullRepos = async () => {
  try {
    const api_url = "https://api.github.com/users/cunning-weasel/repos";
    const res = await fetch(api_url);
    repos = await res.json();
    console.log(repos);
    shoRepos(repos);
  } catch (err) {
    console.error(err);
  }
};

const shoRepos = (repos) => {
  const htmlString = repos
    .map((repo) => {
      return `
    <div>
    <div>
      <h2> ${repo.name} </h2>
    </div>
    <div>
      <p>${repo.language}</p>
    </div>
    <div>
    <p>${repo.description}</p>
  </div>
    <div>
      <a href="${repo.html_url}" target="_blank">Repository</a>
      <a href="${repo.homepage}" target="_blank">Website</a>
    </div>
</div>
    `;
    })
    .join("");
  repoList.innerHTML = htmlString;
};

pullRepos();

// click event for darkmode
// const darkLight = () => {
//   const docBod = document.body;
//   docBod.classList.toggle("dark-mode");
// };

/*
  // data-viz
  // segment by lang, commits, pushes, collaborators, region ?
  // console.log(d3); 
  // console.log(data[0].language, data[1].language);
  // let lang = [data[0].language, data[1].language], comms = [], push = [], collabs = [];

  d3.select("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (d) => d)
}
*/
