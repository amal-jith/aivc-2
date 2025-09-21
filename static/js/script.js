function scrollFunction() {
  const btn = document.getElementById("myBtn");
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 100) {
    btn.style.display = "flex"; // show button
  } else {
    btn.style.display = "none"; // hide button
  }
}

// Scroll smoothly to the top when clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach scrollFunction to window scroll
window.onscroll = scrollFunction;

// ✅ Run once on page load to hide/show button correctly
document.addEventListener("DOMContentLoaded", scrollFunction);
