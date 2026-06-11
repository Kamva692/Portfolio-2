// =====================
//  Modal handling
// =====================
const certData = {
    cert1:     { title: 'Full Stack in Web Development',   issuer: 'IT Varsity – FNB App Academy', date: '29 July 2025', number: 'AOTYAA7025', student: '6888D531AAC2D', image: 'certificate.png' },
    autocad:   { title: 'AutoCAD 3D Modelling',            issuer: 'Autodesk / IT Varsity',         date: 'Completed' },
    revit:     { title: 'Revit Reinforced Concrete',        issuer: 'Autodesk / IT Varsity',         date: 'Completed' },
    pm:        { title: 'Project Management',               issuer: 'IT Varsity',                    date: 'Completed' },
    literacy:  { title: 'Computer Literacy',                issuer: 'IT Varsity',                    date: 'Completed' },
    webdesign: { title: 'Web Design Introduction',          issuer: 'IT Varsity',                    date: 'Completed' },
    fullstack: { title: 'Full Stack Development',           issuer: 'IT Varsity – FNB App Academy', date: '29 July 2025', number: 'AOTYAA7025', student: '6888D531AAC2D', image: 'certificate.png' }
};

function openModal(key) {
    const modal = document.getElementById('certificateModal');
    const body  = document.getElementById('modalBody');
    const data  = certData[key];
    if (!data) return;

    body.innerHTML = `
        ${data.image ? `<img src="${data.image}" alt="${data.title} Certificate">` : ''}
        <h3>${data.title}</h3>
        <p><strong>Awarded by:</strong> ${data.issuer}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        ${data.number  ? `<p><strong>Certificate Number:</strong> ${data.number}</p>` : ''}
        ${data.student ? `<p><strong>Student Number:</strong> ${data.student}</p>`   : ''}
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('certificateModal').classList.remove('active');
}

document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// =====================
//  Contact form
// =====================
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-send');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = '#2e7d32';
    btn.style.borderColor = '#2e7d32';
    btn.style.color = '#fff';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        e.target.reset();
    }, 3000);
}

// =====================
//  Smooth scroll
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
