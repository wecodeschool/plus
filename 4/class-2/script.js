function makeButtonRed(button) {
  button.classList.add("btn-danger");
  button.classList.remove("btn-primary");
}

function makeButtonBlue(button) {
  button.classList.add("btn-primary");
  button.classList.remove("btn-danger");
}

function like(event) {
  let button = event.target;
  if (button.innerText === "Like") {
    button.innerText = "Unlike";
    makeButtonRed(button);
  } else {
    button.innerText = "Like";
    makeButtonBlue(button);
  }
}

let likeButton = document.querySelector("button");
likeButton.addEventListener("click", like);
