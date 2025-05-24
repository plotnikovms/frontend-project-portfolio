const key = 'key';
const showDelay = 10000;
const storageTime = 1000 * 60 * 60 * 24 * 2;

function shouldShowPopup() {
  const lastShown = localStorage.getItem(key);
  if (!lastShown) return true;

  const lastDate = new Date(lastShown);
  const now = new Date();

  const diff = now - lastDate;

  return diff >= storageTime;
}

function showPopup() {
  document.body.style.overflow = 'hidden';

  const formTemplate = document.querySelector('#pop-up-window').content;
  const form = formTemplate.querySelector('.pop-up-window').cloneNode(true);
  form.classList.add('opened-card');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  overlay.append(form);
  document.body.append(overlay);

  overlay.addEventListener('click', (evt) => {
    if (evt.target === overlay) {
      closeForm(overlay);
    }
  });

  localStorage.setItem(key, String(new Date()));
}

function closePopup() {
  overlay.remove();
  document.body.style.overflow = null;
}

window.addEventListener('load', () => {
  if (shouldShowPopup()) {
    setTimeout(showPopup, showDelay);
  }
});
