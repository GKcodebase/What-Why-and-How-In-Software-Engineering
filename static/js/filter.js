function sortBlogs(criteria) {
    const container = document.getElementById('blog-container');
    const cards = Array.from(container.getElementsByClassName('blog-card'));

    cards.sort((a, b) => {
        if (criteria === 'date-desc') {
            return b.dataset.date - a.dataset.date;
        } else if (criteria === 'date-asc') {
            return a.dataset.date - b.dataset.date;
        } else if (criteria === 'title-asc') {
            return a.dataset.title.localeCompare(b.dataset.title);
        }
    });

    // Re-append sorted cards
    cards.forEach(card => container.appendChild(card));
}

// Initial Sort
document.addEventListener('DOMContentLoaded', () => {
    sortBlogs('date-desc');
});
