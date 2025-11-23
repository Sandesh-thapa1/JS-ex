'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const names = (typeof window.names !== 'undefined')
    ? window.names
    : ['John', 'Paul', 'Jones'];

  const target = document.getElementById('target');
  let html = '';
  for (const n of names) {
    html += `<li>${n}</li>`;
  }
  target.innerHTML = html;
});
