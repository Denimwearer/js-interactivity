console.log("hello world");

const message = document.querySelector("#message");

const addMovie = (e) => {
  e.preventDefault();
  let inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");

  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = "";
};

const deleteMovie = (e) => {
  e.target.parentNode.remove();
  message.textContent = "Movie deleted";
};

let crossOffMovie = (e) => {
  e.target.classList.toggle("checked");
  if (e.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  }
};

document.querySelector("form").addEventListener("submit", addMovie);
