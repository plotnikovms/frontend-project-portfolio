const listOfButtons = document.querySelectorAll(".contact-me");


listOfButtons.forEach(function (button) {
  button.addEventListener('click', () => openForm());
});

function openForm() {
  document.body.style.overflow = 'hidden';

  const formTemplate = document.querySelector('#form').content;
  const form = formTemplate.querySelector('.form').cloneNode(true);
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


  const inputs = form.querySelectorAll("input[type='text'], textarea");

  inputs.forEach(input => {
      input.addEventListener('input', () => validation(input));
  });
}

function closeForm(overlay) {
  overlay.remove();
  document.body.style.overflow = null;
}



function validation(input) {
    const englishRegex = /^[a-zA-Z0-9\s.,!?-]*$/;

    const value = input.value;
    if (!englishRegex.test(value)) {
        input.setCustomValidity('Please, use only English letters, numbers, or punctuation marks');
    } else {
        input.setCustomValidity('');
    }
}
