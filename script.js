const url = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    author.textContent = data.author;
    quote.textContent = data.content;
  });
