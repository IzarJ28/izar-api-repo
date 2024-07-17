// script.js
const apiUrl = 'https://emailverification.whoisxmlapi.com/api/v3?apiKey=at_A6z9x0szIDzy7qsKRMfCeOsXrTLZf&emailAddress=support@whoisxmlapi.com';
const apiKey = 'at_A6z9x0szIDzy7qsKRMfCeOsXrTLZf';

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const resultsDiv = document.querySelector('#results');
const emailSpan = document.querySelector('#email');
const isValidSpan = document.querySelector('#isValid');
const isActiveSpan = document.querySelector('#isActive');
const isDisposableSpan = document.querySelector('#isDisposable');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  fetch(`${apiUrl}?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(response => response.json())
  .then(data => {
    emailSpan.textContent = email;
    isValidSpan.textContent = data.isValid ? 'Yes' : 'No';
    isActiveSpan.textContent = data.isActive ? 'Yes' : 'No';
    isDisposableSpan.textContent = data.isDisposable ? 'Yes' : 'No';
    resultsDiv.classList.add('show');
  })
  .catch(error => console.error(error));
});