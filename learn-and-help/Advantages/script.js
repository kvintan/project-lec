document.addEventListener('DOMContentLoaded', function() {
    var howItWorksNavbarItems = document.querySelectorAll('.howitworks');
  
    howItWorksNavbarItems.forEach(function(navbarItem) {
      navbarItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        var angleDownIcon = navbarItem.querySelector('.fa-angle-down');
        var dropDownMenu = navbarItem.querySelector('.dropdown-howitworks');
        angleDownIcon.classList.toggle('rotate');
        dropDownMenu.classList.toggle('show');
      });
    });
  
    var discoverNavbarItems = document.querySelectorAll('.discover');
  
    discoverNavbarItems.forEach(function(navbarItem) {
      navbarItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        var angleDownIcon = navbarItem.querySelector('.fa-angle-down');
        var dropDownMenu = navbarItem.querySelector('.dropdown-discover');
        angleDownIcon.classList.toggle('rotate');
        dropDownMenu.classList.toggle('show');
      });
    });


    var communityNavbarItems = document.querySelectorAll('.community');
    console.log(communityNavbarItems);
    communityNavbarItems.forEach(function(navbarItem) {
      navbarItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        var angleDownIcon = navbarItem.querySelector('.fa-angle-down');
        var dropDownMenu = navbarItem.querySelector('.dropdown-community');
        console.log(angleDownIcon);
        console.log(dropDownMenu);
        angleDownIcon.classList.toggle('rotate');
        dropDownMenu.classList.toggle('show');
      });
    });
});


// Scroll carousel slide
const initSlider = () => {
    const imageList = document.querySelector(".caroussel-container");
    const slideButtons = document.querySelectorAll(".button-caroussel");

    // Slide image according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "left-button" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction * 0.42;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        })
    })
}

window.addEventListener("load", initSlider);