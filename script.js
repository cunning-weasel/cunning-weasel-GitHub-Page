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

// darkmode
const dark_light = () => {
  const button = document.querySelector(".dark-light-button");
  const docBod = document.body;

  button.addEventListener("click", (event) => {
    const mode = docBod.classList.contains("dark-mode") ? "light" : "dark";
    button.textContent = `${mode} mode`;
    docBod.classList.toggle("dark-mode");
    console.log("dark-light triggering master weasel");
  });
};

// start search input/ api render
const searchInput = document.querySelector(".searchBox");
searchInput.disabled = true; // disable search input
let repoList = document.querySelector("#projects-sub");
let repos = [];

// search logic
searchInput.addEventListener("keyup", (e) => {
  const searchStr = e.target.value.toLowerCase();

  const filteredRepos = repos.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(searchStr) ||
      (repo.language && repo.language.toLowerCase().includes(searchStr)) ||
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
    searchInput.disabled = false; // enable search input
  } catch (err) {
    console.error(err);
  }
};

const shoRepos = (repos) => {
  const htmlString = repos
    .map((repo) => {
      return `
    <div class="card">
    <div class="card-container">
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
