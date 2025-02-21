// cookie-validator.js
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkCookie() {
  const hasValidCookie = getCookie('server01KeyGenerated') ||
    getCookie('server02KeyGenerated') ||
    getCookie('server03KeyGenerated') ||
    getCookie('adminAuth') ||
    getCookie('recommendServerKeyGenerated');

  if (!hasValidCookie) {
    window.location.href = '/KEY/login.html';
  }
}

checkCookie();
