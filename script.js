// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("mobileMenuToggle");
  const navbar = document.getElementById("navbar");

  toggleButton.addEventListener("click", () => {
    // If the nav is hidden, show it; if shown, hide it
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  });
});

// tawk chat bot
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/678cf70b825083258e077cbe/1ihvaa1ml";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

document.addEventListener("DOMContentLoaded", function () {
  function hideTawkBranding() {
    var tawkBrandingElements = document.getElementsByClassName("tawk-branding");
    for (var i = 0; i < tawkBrandingElements.length; i++) {
      tawkBrandingElements[i].style.display = "none";
    }
  }

  // Initial hide
  hideTawkBranding();

  // Observe for new elements
  var observer = new MutationObserver(hideTawkBranding);
  observer.observe(document.body, { childList: true, subtree: true });
});
