// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.nav-link');
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     // Smooth scrolling
//     links.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetSection.offsetTop - 80,
//                 behavior: 'smooth'
//             });

//             links.forEach(link => link.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });

//     // Menu toggle for mobile
//     menuToggle.addEventListener('click', () => {
//         menuToggle.classList.toggle('active');
//         navLinks.classList.toggle('active');
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Intersection Observer to change active link
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Change this to adjust when the section becomes active
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
                });
            }
        });
    }, observerOptions);

    // Observe each section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
