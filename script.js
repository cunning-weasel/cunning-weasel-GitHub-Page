"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.querySelector(".searchBox");
  let articleList = document.querySelector("#blogArticles");
  let blogArticleContent = document.querySelector("#blogArticleContent");

  const articlePaths = [
    "/blog/2023/Sep/Growth.md",
    "/blog/2023/Jun/Pico.md",
    "/blog/2023/Aug/Anime.md",
    // more paths...
  ];

  const monthsToRetrieve = ["Sep", "Jun", "Aug"];

  const fetchMarkdownFile = async (articlePath) => {
    searchInput.disabled = false;

    try {
      const resp = await fetch(articlePath);

      if (resp.ok) {
        const markdownText = await resp.text();
        console.log("markdownText fetch:", markdownText);
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
        .map(async (path) => {
          const markdownText = await fetchMarkdownFile(path);
          const { date, title, content } = parseMarkdown(markdownText);
          return `
            <div class="card">
              <div class="card-container">
                <div>
                  <p>${date}</p>
                </div>
                <h2>${title}</h2>
              </div>
              <div>
                <p>${content}</p>
              </div>
              <div>
                <a href="${path}" class="btn" id="articleLink">Read more</a>
              </div>
            </div>
          `;
        })
    );

    articleList.innerHTML = htmlContent.join("");
  };

  const parseMarkdown = (markdownText) => {
    const date = "Your Date Logic";
    const title = "Your Title Logic";
    const content = "Your Content Logic";
    return { date, title, content };
  };

  const readMoreLinks = articleList.querySelectorAll("#articleLink");
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const articleId = e.currentTarget.getAttribute("href").substring(1);
      console.log("articleId", articleId);
      showSingleArticle(articleId);
    });
  });

  const showSingleArticle = async (articleId) => {
    const articlePath = `/blog/2023/${articleId}.md`;
    const markdownText = await fetchMarkdownFile(articlePath);
    console.log("article paths:", markdownText);
    const htmlContent = marked.parse(markdownText);
    blogArticleContent.innerHTML = htmlContent;
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