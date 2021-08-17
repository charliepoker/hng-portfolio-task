const contact = document.getElementById("contact-me");
const formContainer = document.querySelector(".form__container");
const closeForm = document.getElementById("close-btn");

console.log(closeForm);

// Open Contact form
contact.addEventListener("click", function showForm() {
  formContainer.style.visibility = "visible";
});
// Close Contact formContainer
closeForm.addEventListener("click", function closeForm() {
  formContainer.style.visibility = "hidden";
});
// Forn Submission
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
