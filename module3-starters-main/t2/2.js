'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');
  ['First item', 'Second item', 'Third item'].forEach((txt, i) => {
    const li = document.createElement('li');
    li.textContent = txt;
    if (i === 1) li.classList.add('my-item');
    target.appendChild(li);
  });
});
