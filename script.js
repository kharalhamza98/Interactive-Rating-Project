const firstCard = document.querySelector('.containerRating');
const secondCard = document.querySelector('.containerTy');
const errorMsg = document.querySelector('.error');
const ratingButtons = document.querySelectorAll('.ratingButton');
const ratingSpan = document.querySelector('.chosenRating');
const subBtn = document.querySelector('.submit');

function ratingToSpan(e) {
  if (e.target.classList.contains('ratingButton')) {
    ratingSpan.innerText = e.target.value;
    ratingButtons.forEach((button) => {
      button.classList.remove('whiteBackground');
    });
    e.target.classList.add('whiteBackground');
  }

  let selected = false;
  ratingButtons.forEach((button) => {
    if (button.classList.contains('whiteBackground')) {
      selected = true;
    }
  });
  if (selected === true && !errorMsg.classList.contains('hidden')) {
    errorMsg.classList.add('hidden');
  }
}

function hideCard(e) {
  e.preventDefault();

  let selected = false;
  ratingButtons.forEach((button) => {
    if (button.classList.contains('whiteBackground')) {
      selected = true;
    }
  });

  if (selected) {
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
  } else {
    errorMsg.classList.remove('hidden');
  }
}

ratingButtons.forEach((button) => {
  document.addEventListener('click', ratingToSpan);
});
subBtn.addEventListener('click', hideCard);
