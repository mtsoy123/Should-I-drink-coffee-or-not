const button = document.querySelector('.button');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

function answer() {
  page.classList.toggle('page_wrong');
  header.classList.toggle('header_wrong');
  body.classList.toggle('body_wrong');
  button.classList.toggle('button_wrong');

  if (body.className.includes('body_wrong')) {
    body.innerHTML = 'Headache, increased heart rate and so on'
  } else {
    body.innerHTML = 'Take a quick quiz to find out'
  }

  if (button.className.includes('button_wrong')) {
    button.innerHTML = 'Restart'
  } else {
    button.innerHTML = 'Start'
  }

  if (header.className.includes('header_wrong')) {
    header.innerHTML = 'No! You will feel bad'
  } else {
    header.innerHTML = 'Should I drink coffee or not?'
  }
}

button.addEventListener('click', answer)
