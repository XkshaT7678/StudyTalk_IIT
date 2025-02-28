// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to check for valid user or admin access
function checkCookie() {
  const isAdmin = getCookie('Admin'); // Check if Admin Cookie is present

  if (isAdmin) {
    console.log("Admin access granted ✅");
    return; // Admins get full access
  }

  const hasValidCookie = getCookie('server01KeyGenerated') ||
    getCookie('server02KeyGenerated') ||
    getCookie('server03KeyGenerated') ||
    getCookie('adminAuth') ||
    getCookie('recommendServerKeyGenerated');

  if (!hasValidCookie) {
    window.location.href = '/login/';
  }
}

// Run the check when the script loads
checkCookie();
