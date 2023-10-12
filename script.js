"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.querySelector(".searchBox");
  let articleList = document.querySelector("#blogArticles");
  let blogArticleContent = document.querySelector("#blogArticleContent");

  const articlePaths = [
    "/blog/2023/Sep/Growth and stuff.md",

    "/blog/2023/Aug/Anime, tech, and a few other things.md",

    "/blog/2023/Jun/Pico, low level and mama-cia.md",
    //
  ];

  const monthsToRetrieve = ["Jun", "Aug", "Sep"];

  const fetchMarkdownFile = async (articlePath) => {
    searchInput.disabled = false;

    try {
      const resp = await fetch(articlePath);

      if (resp.ok) {
        const markdownText = await resp.text();
        // console.log("markdownText fetch:", markdownText);
        return markdownText;
      } else {
        throw new Error("Failed to fetch .md file");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const showArticles = async (articlePaths) => {
    const htmlContent = await Promise.all(
      articlePaths
        .filter((path) => {
          const month = path.split("/")[3];
          return monthsToRetrieve.includes(month);
        })
        .map(async (path, index) => {
          const markdownText = await fetchMarkdownFile(path);
          console.log("path:", path, index);
          const month = path.split("/")[3];
          const title = path.split("/")[4].replace(/\.md$/, '');
          // const content = path.split("/")[4];
          const content = "Content Logic for 2 lines?";

          return `
            <div class="card">
              <div class="card-container">
                <div>
                  <p>${month}</p>
                </div>
                <div>
                  <p>${title}</p>
                </div>
              </div>
              <div>
                <p>${content}</p>
              </div>
              <div>
                <a href="#" class="btn read-more-link" data-article-index="${index}">Read more</a>
              </div>
            </div>
          `;
        })
    );
    articleList.innerHTML = htmlContent.join("");
  };

  const readMoreLinks = document.querySelectorAll(".read-more-link");
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const articleIndex = e.currentTarget.dataset.articleIndex;
      console.log("articleIndex:", articleIndex);
      showSingleArticle(articleIndex);
    });
  });

  const showSingleArticle = async (articleIndex) => {
    const articlePath = articlePaths[articleIndex];
    const markdownText = await fetchMarkdownFile(articlePath);
    const htmlContent = marked.parse(markdownText);
    // Redirect to 'blogArticle.html' and pass the article content as a query parameter
    window.location.href = `blogArticle.html?articleContent=${encodeURIComponent(htmlContent)}`;
  };


  searchInput.addEventListener("keyup", (e) => {
    const searchStr = e.target.value.toLowerCase();
    const filteredArticles = articles.filter((article) => {
      const title = article.title.toLowerCase();
      const content = article.content.toLowerCase();
      return title.includes(searchStr) || content.includes(searchStr);
    });
    showArticles(filteredArticles);
  });

  // initial render
  showArticles(articlePaths);
});

// needs to be publish date - some static var
// const currentDate = new Date(Date.now());

// const dateFormat = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// const formattedDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
//   currentDate
// );

// document.getElementById("currentDate").textContent = formattedDate;









/*

old site


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
*/