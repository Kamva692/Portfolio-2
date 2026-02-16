// ==========================
// Smooth Scroll Highlight
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ==========================
// Modal System
// ==========================
function openModal(cert) {
    const modal = document.getElementById("certificateModal");
    const body = document.getElementById("modalBody");

    let content = `
        <h2>Certificate Preview</h2>
        <p>This is the certificate for: <strong>${cert}</strong></p>
        <img src="https://via.placeholder.com/500x300/008080/ffffff?text=${cert}" 
             style="width:100%; margin-top:20px; border-radius:10px;">
    `;

    body.innerHTML = content;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("certificateModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// ==========================
// Contact Form Alert
// ==========================
document.querySelector(".contact-form")
    .addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        this.reset();
    });

// ==========================
// QR URL Auto Display
// ==========================
window.addEventListener("DOMContentLoaded", () => {
    const urlText = document.getElementById("websiteUrl");
    urlText.textContent = window.location.href;
});
