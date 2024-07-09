document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensagem enviada com sucesso!");
        });
    }
});
