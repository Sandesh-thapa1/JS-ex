'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const students = (typeof window.students !== 'undefined')
    ? window.students
    : [
        { name: 'John', id: '2345768' },
        { name: 'Paul', id: '2134657' },
        { name: 'Jones', id: '5423679' },
      ];

  const target = document.getElementById('target');
  for (const s of students) {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.name;
    target.appendChild(opt);
  }
});
