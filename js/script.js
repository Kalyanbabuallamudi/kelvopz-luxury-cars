// Custom JavaScript functionality (if required)
document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
