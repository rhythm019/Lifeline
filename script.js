document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var message = document.getElementById("message").value;

    // Perform form validation (you can add more checks as per your requirements)
    if (!name || !email || !phone || !date || !time || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Send the appointment request to the server (you can replace this with your own logic)
    var request = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
      message: message,
    };

    // Print the request object in the console (you can send it to the server using AJAX, fetch, etc.)
    console.log(request);

    // Clear the form after submission
    document.getElementById("appointmentForm").reset();
  });
