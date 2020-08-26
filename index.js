/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.querySelector("h1#header");
header.addEventListener("click", function(e){
  toggleColor(e.target);
});

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/
const form = document.querySelector('#new-player-form');

form.addEventListener("submit", function(e){
  e.preventDefault();
  let field = e.target;
  let player = {
    number: field.number.value,
    name: field.name.value,
    nickname: field.nickname.value,
    photo: field.photo.value,
    likes: 1000
  };

  renderPlayer(player);
  field.reset();
});

/***** Deliverable 3 *****/
const playerDivs = playerContainer.children;

playerDivs.forEach(function(player){
  const likeButton = player.lastElementChild;
  const likeTag = player.querySelector('.likes');
  let likes = parseInt(likeTag.innerText.split(" ")[0], 10);

  likeButton.addEventListener("click", function(e){
    likes++
    likeTag.innerText = `${likes} likes`;
  });

});