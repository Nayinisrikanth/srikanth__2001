document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hide messages first
    errorMsg.style.display = "none";
    successMsg.style.display = "none";

    if (username === "admin" && password === "1234") {
      successMsg.textContent = "Login successful 🎉";
      successMsg.style.display = "block";

      // Optional redirect
      setTimeout(() => {
        alert("Redirecting to dashboard...");
        window.location.href = "#"; // Replace with your real link
      }, 1500);
    } else {
      errorMsg.textContent = "Invalid username or password!";
      errorMsg.style.display = "block";
    }
  });
});
