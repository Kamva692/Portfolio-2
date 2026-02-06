// MODAL LOGIC
const modal = document.getElementById("certificateModal");
const modalBody = document.getElementById("modalBody");

function openModal(type) {
    modal.style.display = "flex";

    const certificates = {
        cert1: `<h2>Full Stack Development Certificate</h2>
                <img src="https://via.placeholder.com/500x350/008080/ffffff?text=Full+Stack+Certificate" width="100%">`,
        autocad: `<h2>AutoCAD 3D Modelling</h2><p>Advanced 3D drafting and visualization.</p>`,
        revit: `<h2>Revit Reinforced Concrete</h2><p>BIM-based structural design.</p>`,
        pm: `<h2>Project Management</h2><p>Planning, scheduling and execution.</p>`,
        literacy: `<h2>Computer Literacy</h2><p>Microsoft Office mastery.</p>`,
        webdesign: `<h2>Web Design</h2><p>UI/UX fundamentals.</p>`,
        fullstack: `<h2>Full Stack Development</h2><p>End-to-end web applications.</p>`
    };

    modalBody.innerHTML = certificates[type] || "<p>Certificate not found.</p>";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) closeModal();
};

// SKILL BAR ANIMATION
const skills = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// QR URL AUTO LOAD
document.getElementById("websiteUrl").textContent = window.location.href;

// CONTACT FORM (DEMO)
document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
    e.target.reset();
});
