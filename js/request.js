document.getElementById("request-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const patientName = document.getElementById("patient-name").value.trim();
  const bloodGroup = document.getElementById("required-blood-group").value;
  const units = document.getElementById("blood-units").value.trim();
  const contact = document.getElementById("patient-contact").value.trim();

  if (patientName === "" || bloodGroup === "" || units === "" || contact === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (isNaN(units) || units <= 0) {
    alert("Please enter a valid number of blood units.");
    return;
  }

  const contactPattern = /^[6-9]\d{9}$/;
  if (!contactPattern.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  alert("Blood request submitted successfully! We will contact you soon.");
  document.getElementById("request-form").reset();
});
