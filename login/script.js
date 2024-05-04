document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById("register-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (email === "") {
            alert("Email cannot be empty");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            alert("Email must end with @gmail.com");
            return;
        }

        if (password === "") {
            alert("Please enter your password");
            return;
        }

        let confirmation = confirm("Are you sure you want to submit?");
        if (confirmation) {
            alert("Submit Successfully!");
            setTimeout(function () {
                window.location.href = '../index.html';
            });
        } else {
        }
    });

    let submitButton = document.getElementById('button-sub');
    
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        form.dispatchEvent(new Event('submit'));
    });
});
