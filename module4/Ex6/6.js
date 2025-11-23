'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('jokeForm');
  const input = document.getElementById('query');
  const results = document.getElementById('results');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const term = input.value.trim();
    if (!term) return;

    results.innerHTML = ''; // clear old jokes

    try {
      const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(term)}`);
      const data = await res.json();

      if (data.result.length === 0) {
        results.innerHTML = '<p>No jokes found!</p>';
        return;
      }

      for (const joke of data.result) {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = joke.value;
        article.appendChild(p);
        results.appendChild(article);
      }
    } catch (err) {
      console.error('Error fetching jokes:', err);
      results.innerHTML = '<p>Something went wrong.</p>';
    }
  });
});
