const { application } = require("express");

const signupForm = document.querySelector("#signup");
let signupUsername = document.querySelector("#signup-username");
let signupEmail = document.querySelector("#signup-email");
let signupPassword = document.querySelector("#signup-password");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let userDetails = {
        username: signupUsername.value,
        email: signupEmail.value,
        password: signupPassword.value
    };

    let response = await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
    });

    let data = await response.json();
    console.log(data);
    if (data.status === "ok") {
        alert("signup successful");
    } 
    else {
        alert("something went wrong");
    }
});