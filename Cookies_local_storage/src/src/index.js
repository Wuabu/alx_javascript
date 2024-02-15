// src/index.js

function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
  
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
  }
  
  function showCookies() {
    const cookiesParagraph = document.createElement('p');
    const cookiesValue = document.cookie || 'No cookies set';
  
    cookiesParagraph.innerHTML = `Cookies: ${cookiesValue}`;
    document.body.appendChild(cookiesParagraph);
  }
  