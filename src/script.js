function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Thank you " + name + "! Your response has been submitted.");
    document.getElementById("contactForm").reset();
}