'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('query');
  const results = document.getElementById('results');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const q = input.value.trim();
    if (!q) return;

    // clear old results
    results.innerHTML = '';

    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      // build <article> for each show
      for (const item of data) {
        const show = item.show;

        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = show.name;

        const link = document.createElement('a');
        link.href = show.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'More info';

        const img = document.createElement('img');
        // 4.3 requirement: use optional chaining for missing images
        img.src = show.image?.medium || '';
        img.alt = show.name || 'TV show image';

        const summaryDiv = document.createElement('div');
        // summary is HTML from API (already inside <p>), so put it inside a <div>
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
