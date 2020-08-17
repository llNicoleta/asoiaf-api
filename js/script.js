const form = document.querySelector("form");
const input = document.querySelector("input");
const err = document.querySelector(".error");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function getRandom() {
  const respone = await fetch(
    "https://game-of-thrones-quotes.herokuapp.com/v1/random"
  );
  const json = await respone.json();
  quote.textContent = ` "${json.sentence}"`;
  author.textContent = ` -${json.character.name}`;
}

async function getByAuthor(name) {
  const response = await fetch(
    `https://game-of-thrones-quotes.herokuapp.com/v1/author/${name}`
  );
  json = await response.json();
  quote.textContent = ` "${json.sentence}"`;
  author.textContent = ` -${json.character.name}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  quote.textContent = "";
  author.textContent = "";
  let name = input.value;
  name = name.toLowerCase();
  if (!name) getRandom();
  else {
    getByAuthor(name);
  }
});
