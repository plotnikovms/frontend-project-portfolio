const listOfCards = document.querySelectorAll(".projects-section__projects__project");


listOfCards.forEach(function (card) {
  card.addEventListener('click', () => openCard(card));
});


function openCard(card) {
  document.body.style.overflow = 'hidden';

  const openedCard = card.cloneNode(true);
  openedCard.classList.add('opened-card');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  overlay.append(openedCard);
  document.body.append(overlay);


  const leftSwapButton = document.createElement('div');
  const rightSwapButton = document.createElement('div');
  leftSwapButton.classList.add('left-swap-button');
  rightSwapButton.classList.add('right-swap-button');
  overlay.prepend(leftSwapButton);
  overlay.append(rightSwapButton);

  if (!card.previousElementSibling) leftSwapButton.style.display = "none";
  if (!card.nextElementSibling) rightSwapButton.style.display = "none";

  leftSwapButton.addEventListener('click', function () {
    let prevCard = card.previousElementSibling;
    closeCard(overlay);
    openCard(prevCard);
  });

  rightSwapButton.addEventListener('click', function () {
    let nextCard = card.nextElementSibling;
    closeCard(overlay);
    openCard(nextCard);
  });



  overlay.addEventListener('click', (evt) => {
    if (evt.target === overlay) {
      closeCard(overlay);
    }
  });
}

function closeCard(overlay) {
  overlay.remove();
  document.body.style.overflow = null;
}
