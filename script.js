function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let msg = document.getElementById("msg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields";
        return false;
    }

    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";
    return false;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }

    let table = document.getElementById("contactTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = email;
    row.insertCell(2).innerText = message;

    document.querySelector("form").reset();
    return false;
}
