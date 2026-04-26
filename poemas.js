const poems = {
  1: {
    title: 'Eres mi sol',
    text: `Eres la aurora que llega sin ruido,
el calor que vuelve cada latido.

Tus ojos dibujan promesas en mi alma,
y en cada verso se hace una calma.

Eres mi sol en los días de lluvia,
mi abrazo eterno, mi dulce melodía.`
  },
  2: {
    title: 'En cada latido',
    text: `Cada segundo contigo es un poema,
una brisa suave que deshace el tema.

Tu risa es luz dentro de mis mañanas,
y tus palabras son alas tempranas.

Mi corazón aprende a nombrar tu nombre,
y en cada latido te siente y te asombre.`
  },
  3: {
    title: 'Siempre a tu lado',
    text: `Camino hacia tus ojos, y en tu mirada
encuentro mi mundo, mi paz, mi morada.

Las noches se llenan de estrellas sinceras,
quiero ser la voz que canta tus primaveras.

Siembra tu sonrisa en mi vida herida,
que yo te devuelvo amor cada día.`
  }
};

const modalOverlay = document.getElementById('poemModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModalButton = document.getElementById('closeModal');
const poemCards = document.querySelectorAll('.poem-card');

function openModal(poemId) {
  const poem = poems[poemId];
  if (!poem) return;
  modalTitle.textContent = poem.title;
  modalText.textContent = poem.text;
  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

poemCards.forEach((card) => {
  card.addEventListener('click', () => {
    const poemId = card.dataset.poemId;
    openModal(poemId);
  });
});

closeModalButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});
