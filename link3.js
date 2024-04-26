document.addEventListener("DOMContentLoaded", function() {
    var aboutus1 = document.getElementById("aboutuslink-1");
    var owner1 = document.getElementById("ownerlink-1");
    var pricing1 = document.getElementById("pricinglink-1");
    var faqs1 = document.getElementById("faqslink-1");
    var create1 = document.getElementById("createlink-1");
    var browse1 = document.getElementById("browselink-1");
    var sell1 = document.getElementById("selllink-1");
    var affiliate1 = document.getElementById("affiliatelink-1");
    var community1 = document.getElementById("communitylink-1");
    var blog1 = document.getElementById("bloglink-1");


    aboutus1.addEventListener("click", function() {
        window.location.href = "about-us.html";
    });
    
    owner1.addEventListener("click", function() {
        window.location.href = "learn-and-help/Owner/Owner.html";
    });
    
    pricing1.addEventListener("click", function() {
        window.location.href = "pricing-page.html";
    });
    
    faqs1.addEventListener("click", function() {
        window.location.href = "learn-and-help/FAQs/FAQs.html";
    });
    
    create1.addEventListener("click", function() {
        window.location.href = "create.html";
    });
    
    browse1.addEventListener("click", function() {
        window.location.href = "browse.html";
    });
    
    sell1.addEventListener("click", function() {
        window.location.href = "sell.html";
    });
    
    affiliate1.addEventListener("click", function() {
        window.location.href = "affiliate.html";
    });
    
    community1.addEventListener("click", function() {
        window.location.href = "community.html";
    });
    
    blog1.addEventListener("click", function() {
        window.location.href = "blog.html";
    });

});