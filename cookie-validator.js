function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
}

function checkCookie() {
    const validCookies = ['server01KeyGenerated', 'server02KeyGenerated', 'server03KeyGenerated', 'adminAuth', 'recommendServerKeyGenerated'];
    const hasValidCookie = validCookies.some(cookie => getCookie(cookie));

    if (!hasValidCookie) {
        if (!window.location.pathname.includes('/login')) {
            window.location.href = '/login/';
        }
    }
}

// Ensure it runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', checkCookie);
