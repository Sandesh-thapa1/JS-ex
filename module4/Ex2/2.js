'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('query');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent page reload
    const searchTerm = input.value.trim();

    if (searchTerm === '') {
      console.log('Please type a TV show name.');
      return;
    }

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      console.log(data); // print full result to console
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
