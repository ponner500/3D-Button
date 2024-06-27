document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn");
    button.addEventListener("click", function() {
        const originalText = this.textContent;
        this.textContent = "nothing happened.";
        
        setTimeout(() => {
            this.textContent = originalText;
        }, 1000);
    });
});
