/* ==========================
   SMOOTH SECTION SCROLL
========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* ==========================
   CERTIFICATE MODAL SYSTEM
========================== */

function openModal(certName) {
    const modal = document.getElementById("certificateModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <h2 style="margin-bottom:15px; color:#1f3a5f;">Certificate Details</h2>
        <p style="margin-bottom:20px;">
            Certificate reference: <strong>${certName}</strong>
        </p>
        <img 
            src="https://via.placeholder.com/600x350/f4f6f8/1f3a5f?text=${certName}" 
            style="width:100%; border:1px solid #e0e6ed;"
            alt="Certificate Preview"
        >
    `;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

window.addEventListener("click", function (e) {
    const modal = document.getElementById("certificateModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


/* ==========================
   CONTACT FORM HANDLER
========================== */

document.querySelector(".contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please complete all required fields.");
            return;
        }

        alert("Thank you for your message. I will respond as soon as possible.");
        this.reset();
    });


/* ==========================
   QR SECTION - AUTO WEBSITE URL
========================== */

window.addEventListener("DOMContentLoaded", function () {
    const urlText = document.getElementById("websiteUrl");
    if (urlText) {
        urlText.textContent = window.location.href;
    }
});
