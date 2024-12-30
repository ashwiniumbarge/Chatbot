// Handle feedback submission
// Rating stars functionality
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Handle feedback submission
document.getElementById('submit-review').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value.trim();

    if (selectedRating > 0 && feedback) {
        // Create a FormData object to send data
        const formData = new FormData();
        formData.append('rating', selectedRating);
        formData.append('feedback', feedback);

        fetch('submit_feedback.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success message
            // Optionally, clear the feedback input
            document.getElementById('feedback').value = '';
            selectedRating = 0;
            highlightStars(0); // Reset star rating
        })
        .catch(error => console.error('Error:', error));
    } else if (selectedRating === 0) {
        alert('Please select a rating.');
    } else {
        alert('Please provide your feedback.');
    }
});
