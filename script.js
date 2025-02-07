document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const landArea = document.getElementById('land-area').value;
    const landType = document.getElementById('land-type').value;

    // For now, just log the details in the console
    console.log("User Details:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Email ID:", email);
    console.log("Contact Number:", contact);
    console.log("Land Area:", landArea, "square feet");
    console.log("Land Type:", landType);

    // You can add more functionality here, like sending data to a server or displaying a message to the user.
    alert("Form submitted successfully!");

    // Optionally, clear the form after submission
    document.getElementById('loginForm').reset();
});
