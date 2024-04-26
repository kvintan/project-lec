// @type {HTMLFormElement}
let form = document.getElementById("register-form")

form.addEventListener("submit",function(e) {
    e.preventDefault()
    // console.log(form)

    let name = document.getElementById("name")

    
    let email = document.getElementById("email")

    
    let password = document.getElementById("password")


    alert("Submit!")

})

let preloader = document.getElementById("preloader");
let behind = document.getElementById("behind");
function popOpen(){
    behind.style.filter = "blur(10px)";
    preloader.classList.add("open-preloader");
    // preloader.classList.toggle("open-preloader");
}


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('button-sub');
    form.addEventListener('click', function (event) {
        event.preventDefault();

        setTimeout(function () {
            window.location.href = '../index.html';
        }, 3000);
    });
});
