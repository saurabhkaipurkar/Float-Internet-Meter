// script.js — shared logic for Floating Internet Speed policy pages

document.addEventListener("DOMContentLoaded", function () {
  // Auto-update footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});