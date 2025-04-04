document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill out both fields.");
    return;
  }

  if (password.length < 5) {
    alert("Password must be at least 5 characters long.");
    return;
  }

  if (username === "admin" && password === "12345") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
