const scriptURL =
  "https://script.google.com/macros/s/AKfycbxoEgMV0MH4nWwwlnKRubyLf65Iy-NClkqpJXAfMNr6MjJVI4CUW6tUGXdXINzCrXY7/exec";
const form = document.forms["submit-to-google-sheet"];
const submitBtn = document.querySelector(".submit-btn");
const loadingBtn = document.querySelector(".loading-btn");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingBtn.style.display = "block";
  submitBtn.style.display = "none";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      alert.style.display = "inline-block";
      loadingBtn.style.display = "none";
      submitBtn.style.display = "block";
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
