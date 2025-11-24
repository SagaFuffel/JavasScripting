'use strict'

const a = document.getElementById("searchTV")
const resultsDiv = document.getElementById("results")

a.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = document.getElementById("query").value.trim();

  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  try {
    const response = await fetch(url);
    const stuff = await response.json();

    resultsDiv.innerHTML = ""

    stuff.forEach((tvShow) => {
      const show = tvShow.show;
      const article = document.createElement("article")
      const title = document.createElement("h2")
      title.textContent = show.name;

      const link = document.createElement("a")
      link.href = show.url
      link.target = "_blank"
      link.textContent = "More details"

      const img = document.createElement("img")
      img.src = show.image?.medium //without the imageswn't show
      img.alt = show.name

      const summaryDiv = document.createElement("div");
      summaryDiv.innerHTML = show.summary

      // append elements to article
      article.append(title, link, img, summaryDiv);

      // add article to results
      resultsDiv.append(article);
    })
    console.log(stuff)
  } catch (error) {
    console.error("A problem has arisen:", error)
  }
  //console.log(stuff)

})