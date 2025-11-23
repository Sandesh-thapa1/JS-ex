'use strict';

// Fetch one random joke on page load and print only the 'value' field.
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    console.log(data.value);
  } catch (err) {
    console.error('Failed to fetch joke:', err);
  }
});
