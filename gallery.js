const pigCards = document.querySelectorAll('.pig-card');

const pigObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('pig-show');
        }
    });
}, { threshold: 0.2 });

pigCards.forEach(card => {
    pigObserver.observe(card);
});