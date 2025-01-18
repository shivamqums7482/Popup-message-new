// Select elements
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const upcomingIssueLink = document.querySelector('.upcoming');
const closeButton = document.getElementById('popup-close');

// Show the popup
upcomingIssueLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default hyperlink behavior
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Close the popup
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Close the popup when clicking on the overlay
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});
