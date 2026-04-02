// ---------- Modal Functionality ----------
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");
    const closeBtn = document.querySelector(".close");

    // Fonction ouverte globalement pour les boutons "More"
    window.openModal = function(title, imgSrc, text) {
        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalText.textContent = text;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    // Fonction pour fermer le modal
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Fermer modal au clic sur la croix
    closeBtn.addEventListener("click", closeModal);

    // Fermer modal au clic sur l’arrière-plan
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Optionnel: fermer avec Échap
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
});