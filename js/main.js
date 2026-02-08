
document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    const mobileMenuBtn = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Manejo del formulario de contacto para WhatsApp
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (!name || !email || !message) {
                alert("Por favor, completa todos los campos.");
                return;
            }
            
            const whatsappMessage = `Hola, mi nombre es ${name}.\nMi correo es ${email}.\nEstoy interesado en recibir información.\nMensaje: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/573112057398?text=${encodedMessage}`;
            
            window.open(whatsappUrl, "_blank");
        });
    }

});
