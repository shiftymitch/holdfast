document.addEventListener('DOMContentLoaded', function () {

    // Navigation Bar
    const navbar = document.querySelector('.navbar-main');
    const navbarHeight = navbar.offsetHeight;
    const scrollThreshold = navbar.offsetTop + navbarHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY >= scrollThreshold) {
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    });

    // Photo Carousel Controls
    let index = 0;
    const images = document.querySelectorAll('#carousel img');
    const totalImages = images.length;
    let intervalId = null; // Store the interval ID

    function showImage(idx) {
        index = idx;
        images.forEach((image, i) => {
            if (i === idx) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        restartInterval(); // Restart the interval after showing the image
    }

    function nextImage() {
        index = (index + 1) % totalImages;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + totalImages) % totalImages;
        showImage(index);
    }

    function restartInterval() {
        clearInterval(intervalId); // Clear the previous interval
        intervalId = setInterval(nextImage, 3000); // Restart the interval
    }

    // Automatically advance to the next image every 3 seconds
    restartInterval();

    // Show the first image initially
    showImage(index);

    // Add event listeners to navigation arrows
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);
});


// Expand Service Details
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle the visibility of details for clicked service
            item.querySelector('.service-details').classList.toggle('hidden');

            // Hide details for other services
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.service-details').classList.add('hidden');
                }
            });
        });
    });
});