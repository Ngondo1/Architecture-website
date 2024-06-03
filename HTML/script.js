// Inside your script.js file (or at the end of your HTML <body> if inline)
document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    if (button1) {
        button1.addEventListener("click", () => {
            alert("Welcome to Mwangi's Architectural firm. For more information, click on the NEXT button.");
        });
    } else {
        console.error("Button with id 'button1' not found.");
    }
});
