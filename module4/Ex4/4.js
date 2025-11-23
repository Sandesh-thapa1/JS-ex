'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('query');
  const results = document.getElementById('results');
  const PLACEHOLDER = 'https://placehold.co/210x295?text=Not%20Found';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;

    results.innerHTML = ''; // clear old results

    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      for (const item of data) {
        const show = item.show;

        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = show.name ?? 'Unknown title';

        const link = document.createElement('a');
        link.href = show.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'More info';

        const img = document.createElement('img');
        // TERNARY: if show.image exists, use medium; otherwise use placeholder
        img.src = show.image ? show.image.medium : PLACEHOLDER;
        img.alt = show.name || 'TV show image';

        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = show.summary || '<p>No summary available.</p>';

        article.append(h2, link, img, summaryDiv);
        results.appendChild(article);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      results.innerHTML = '<p>Something went wrong. Try again.</p>';
    }
  });
});
