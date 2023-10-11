"use strict";
// change up for server endpoints
// document.addEventListener("DOMContentLoaded", () => {
//   const searchInput = document.querySelector(".searchBox");
//   searchInput.disabled = true;
//   let repoList = document.querySelector("#repos");
//   let repos = [];

//   searchInput.addEventListener("keyup", (e) => {
//     const searchStr = e.target.value.toLowerCase();
//     const filteredRepos = repos.filter((repo) => {
//       return (
//         repo.name.toLowerCase().includes(searchStr) ||
//         (repo.language && repo.language.toLowerCase().includes(searchStr)) ||
//         (repo.description && repo.description.toLowerCase().includes(searchStr))
//       );
//     });
//     showRepos(filteredRepos);
//   });

//   const pullRepos = async () => {
//     try {
//       const api_url = "https://api.github.com/users/cunning-weasel/repos";
//       const res = await fetch(api_url);
//       repos = await res.json();
//       showRepos(repos);
//       searchInput.disabled = false;
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const showRepos = (repos) => {
//     const htmlString = repos
//       .map((repo) => {
//         return `
//         <div class="card">
//             <div class="card-container">
//                 <div>
//                     <p>${repo.language}</p>
//                 </div>
//                 <h2>${repo.name}</h2>
//             </div>
//                 <div>
//                     <p>${repo.description}</p>
//                 </div>
//                 <div>
//                     <a href="${repo.homepage}" class="btn">Read more</a>
//                 </div>
//         </div>
//           `;
//       })
//       .join("");
//     repoList.innerHTML = htmlString;
//   };
//   pullRepos();
// });

// begin file read ish
async function fetchMarkdownFile(filePath) {
  const resp = await fetch(filePath);
  if (resp.ok) {
    const markdownText = await resp.text();
    return markdownText;
  } else {
    throw new Error("Failed to fetch .md file");
  }
}

const markdownText = await fetchMarkdownFile("your-article.md");
const htmlContent = marked(markdownText);

const blogArticlesContainer = document.getElementById("blogArticles");

// assuming an arr of article objects
const articles = [
  {
    title: "Article Title 1",
    content: "Markdown content for article 1...",
  },
  {
    title: "Article Title 2",
    content: "Markdown content for article 2...",
  },
  // more articles here
];

articles.forEach((article, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <div>${article.date}</div>
    <h2>${article.title}</h2>
    <div>${article.content}</div>
    <a href="blogArticle.html#${index}" class="btn">Read more</a>
  `;

  blogArticlesContainer.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  const articleIndex = window.location.hash.replace("#", "");
  // retrieve the article data by index and render it here.
});

// pass endpoints from above i.e
// document.getElementById("content").innerHTML = marked.parse(
//   "# Article title goes here\n\nRest of the text and some **bold** sample all written in .md and rendered to html with marked."
// );

// needs to be publish date - some static var
const currentDate = new Date(Date.now());

const dateFormat = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const formattedDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
  currentDate
);

document.getElementById("currentDate").textContent = formattedDate;
