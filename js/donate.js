document.addEventListener("DOMContentLoaded", function () {
  fetchDonors(); // ✅ Page load hone par donor list fetch karega

  document.getElementById("donate-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const bloodGroup = document.getElementById("bloodGroup").value.trim();
      const contact = document.getElementById("contact").value.trim();

      if (name === "" || email === "" || bloodGroup === "" || contact === "") {
          alert("Please fill out all fields.");
          return;
      }

      const contactPattern = /^[6-9]\d{9}$/;
      if (!contactPattern.test(contact)) {
          alert("Please enter a valid 10-digit contact number.");
          return;
      }

      // ✅ Donor data backend pe bhejna
      fetch("http://localhost:5000/add-donor", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, blood_group: bloodGroup, contact })
      })
      .then(response => response.json())
      .then(data => {
          alert("Thank you for your donation! We will contact you soon.");
          document.getElementById("donate-form").reset();
          fetchDonors(); // ✅ List ko update karo bina refresh kiye
      })
      .catch(error => console.error("Error adding donor:", error));
  });
});

function fetchDonors() {
  fetch("http://localhost:5000/donors") // ✅ Backend API call
      .then(response => response.json())
      .then(data => {
          const donorList = document.getElementById("donor-list");
          donorList.innerHTML = ""; // Purana data clear karein

          data.forEach(donor => {
              const li = document.createElement("li");
              li.textContent = `${donor.name} - ${donor.blood_group} (${donor.contact})`;
              donorList.appendChild(li);
          });
      })
      .catch(error => console.error("Error fetching donors:", error));
}
