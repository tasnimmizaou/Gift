document.addEventListener('DOMContentLoaded', function () {
    const infoBox = document.getElementById('infoBox');
    const closeBtn = document.getElementById('closeBtn');

    // Show info box when the page loads
    infoBox.style.display = 'block';

    // Close info box when close button is clicked
    closeBtn.addEventListener('click', function () {
        infoBox.style.display = 'none';
    });
});





