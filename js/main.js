
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

    // Funcionalidad de galería
    const galleryModal = document.getElementById("gallery-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    const galleryImages = [
        "UNO.png", "DOS.png", "TRES.png", "CUATRO.png", "CINCO.png",
        "SEIS.png", "SIETE.png", "OCHO.png", "NUEVE.png", "DIEZ.png",
        "ONCE.png", "DOCE.png", "TRECE.png", "CATORCE.png", "QUINCE.png", "DIES7.png"
    ];
    
    let currentImageIndex = 0;

    window.openModal = function(event) {
        const img = event.target.closest("img");
        if (img) {
            const src = img.src;
            currentImageIndex = galleryImages.indexOf(src);
            modalImage.src = src;
            galleryModal.classList.remove("hidden");
            lucide.createIcons();
        }
    };

    closeModal.addEventListener("click", () => {
        galleryModal.classList.add("hidden");
    });

    galleryModal.addEventListener("click", (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.add("hidden");
        }
    });

    prevBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
        lucide.createIcons();
    });

    nextBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
        lucide.createIcons();
    });

    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
        if (galleryModal.classList.contains("hidden")) return;
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "Escape") closeModal.click();
    });

});
