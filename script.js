// Countdown Timer (Set conference start date)
const countdownDate = new Date("December 10, 2025 09:00:00").getTime();
const countdownContainer = document.querySelector('.js-countdown')
const timeBoxes = document.querySelectorAll(".countdown .number");
const colons = document.querySelectorAll('.colon')

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    document.querySelector(".js-countdown").innerHTML = "<h3>Conference Started!</h3>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  const values = [days, hours, mins, secs];
  timeBoxes.forEach((box, i) => {
    box.textContent = values[i].toString().padStart(2, "0");
  });
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Join as Speaker Interaction
const joinSpeaker = document.getElementById("joinSpeaker");

joinSpeaker.addEventListener("click", () => {
  const name = prompt("Enter your full name to apply as a speaker:");
  if (name) {
    alert(`Thank you, ${name}! Our team will reach out to you soon.`);
  }
});

// See All Schedule Button
document.querySelector(".btn").addEventListener("click", () => {
  alert("Full conference schedule will be available soon!");
});

// Newsletter Form Validation
const newsletterForm = document.querySelector(".newsletter .form");
newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
});

newsletterForm.querySelector("button").addEventListener("click", () => {
  const emailInput = newsletterForm.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  alert(`Thank you for subscribing, ${email}!`);
  emailInput.value = "";
});

const modal = document.getElementById("registerModal");
const btn = document.getElementById("registerBtn");
const close = document.getElementById("closeModal");

// Show modal when button is clicked
btn.onclick = () => {
  modal.style.display = "block";
};

// Hide modal when close button is clicked
close.onclick = () => {
  modal.style.display = "none";
};

// Hide modal when clicking outside the form
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
