const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {

    cards.forEach(c => {
      c.classList.remove('active');
      c.classList.add('dim');
    });

    card.classList.add('active');
    card.classList.remove('dim');
  });
});

const texts = document.querySelectorAll('.text');

function typeEffect(element) {
  const content = element.textContent;
  element.textContent = "";
  element.style.opacity = 1;

  let i = 0;

  function typing() {
    if (i < content.length) {
      element.textContent += content.charAt(i);
      i++;
      setTimeout(typing, 30);
    }
  }

  typing();
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    typeEffect(texts[index]);
  });
});
