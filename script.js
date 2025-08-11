document.addEventListener("DOMContentLoaded", function () {
    // WhatsApp Button
    const whatsappButton = document.getElementById("whatsappButton");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            window.open("https://wa.me/254712345678", "_blank");
        });
    }
});
