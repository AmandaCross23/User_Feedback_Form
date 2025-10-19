const form = document.getElementById('Feedback_Form');
const feedbackDisplay = document.getElementById('entries');
const container = document.querySelector('.container');

const comments = document.getElementById('comments');
const charCount = document.querySelector('.char-count');
comments.addEventListener('input', () => {
    const length = comments.ariaValueMax.length;
    charCount.textContent = `${length} / 200`;
});

form.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        const tooltip = event.target.nextElementSibling;
        if (tooltip && tooltip.classList.contains('tooltip')) {
            tooltip.style.display = 'block';
        }
    }
});

form.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const tooltip = event.target.nextElementSibling;
    if (tooltip && tooltip.classList.contains('tooltip')) {
      tooltip.style.display = 'none';
    }
  }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = comments.value.trim();

    if (!name || !email || !comment) {
    alert('Please fill all the blanks before submitting.');
    return;
    }

    const entry = document.createElement('div');
    entry.classList.add('feedback-entry');
    entry.innerHTML = `<strong>${name}</strong> (${email})<br> <p>${comment}</p>`;
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = '0 / 200';
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});

container.addEventListener('click', () => {
    console.log('You clicked it!');
});

