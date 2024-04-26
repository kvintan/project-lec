document.addEventListener("DOMContentLoaded", function() {
    var aboutus = document.getElementById("aboutuslink");
    var owner = document.getElementById("ownerlink");
    var pricing = document.getElementById("pricinglink");
    var faqs = document.getElementById("faqslink");
    var create = document.getElementById("createlink");
    var browse = document.getElementById("browselink");
    var sell = document.getElementById("selllink");
    var affiliate = document.getElementById("affiliatelink");
    var community = document.getElementById("communitylink");
    var blog = document.getElementById("bloglink");


    aboutus.addEventListener("click", function() {
        window.location.href = "about-us.html";
    });
    
    owner.addEventListener("click", function() {
        window.location.href = "learn-and-help/Owner/Owner.html";
    });
    
    pricing.addEventListener("click", function() {
        window.location.href = "pricing-page.html";
    });
    
    faqs.addEventListener("click", function() {
        window.location.href = "learn-and-help/FAQs/FAQs.html";
    });
    
    create.addEventListener("click", function() {
        window.location.href = "create.html";
    });
    
    browse.addEventListener("click", function() {
        window.location.href = "browse.html";
    });
    
    sell.addEventListener("click", function() {
        window.location.href = "sell.html";
    });
    
    affiliate.addEventListener("click", function() {
        window.location.href = "affiliate.html";
    });
    
    community.addEventListener("click", function() {
        window.location.href = "community.html";
    });
    
    blog.addEventListener("click", function() {
        window.location.href = "blog.html";
    });

    login.addEventListener("click", function() {
        window.location.href = "login/index.html";
    });

});

function closeDropdown(dropdownId) {
    // Close dropdown by removing 'show' class
    document.querySelector('.dropdown-' + dropdownId).classList.remove('show');
        }
