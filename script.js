document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");

      if (!href.startsWith("/") && !href.includes(location.origin)) {
        event.preventDefault();
        window.open(href, "_blank"); // Open external links in a browser
      } else {
        event.preventDefault();
        fetch(href)
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("content").innerHTML = data;
            history.pushState(null, "", href);
          });
      }
    });
  });

  window.addEventListener("popstate", function () {
    fetch(location.pathname)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
      });
  });
});
