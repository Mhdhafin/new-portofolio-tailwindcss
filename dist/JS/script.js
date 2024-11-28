const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      loader.style.display = "none";
      window.location.href = "/thank-you.html";
    })
    .catch((e) => alert("Error occured"));
});


 const navLinks = document.querySelector(".nav-links");

      function onToggleMenu(e) {
        e.name = e.name === "menu" ? "close" : "menu";
        navLinks.classList.toggle("top-[9%]");
      }

      
