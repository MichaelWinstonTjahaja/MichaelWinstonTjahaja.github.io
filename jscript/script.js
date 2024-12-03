document.addEventListener('scroll', () => {
    const fadeSections = document.querySelectorAll('.fade-section[data-fade]');
    fadeSections.forEach(section => {
        // Check if already animated
        if (section.classList.contains('fade-complete')) return;

        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.classList.add('fade-complete'); // Mark as animated
        }
    });
});
