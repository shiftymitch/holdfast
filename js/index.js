document.addEventListener('DOMContentLoaded', function () {
    // Carousel 1
    let index1 = 0;
    const images1 = document.querySelectorAll('#carousel1 img');
    const totalImages1 = images1.length;
    let intervalId1 = null; // Store the interval ID for carousel 1

    function showImage1(idx) {
        images1.forEach((image, i) => {
            if (i === idx) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage1() {
        index1 = (index1 + 1) % totalImages1;
        showImage1(index1);
        restartInterval1();
    }

    function prevImage1() {
        index1 = (index1 - 1 + totalImages1) % totalImages1;
        showImage1(index1);
        restartInterval1();
    }

    function jumpToPhoto1(idx) {
        index1 = idx;
        showImage1(index1);
        restartInterval1();
    }

    function restartInterval1() {
        clearInterval(intervalId1); // Clear the previous interval
        intervalId1 = setInterval(nextImage1, 3000); // Restart the interval
    }

    // Automatically advance to the next image every 3 seconds
    restartInterval1();

    // Show the first image initially
    showImage1(index1);

    // Add event listeners to navigation arrows for carousel 1
    document.getElementById('prevBtn1').addEventListener('click', function() {
        prevImage1();
        clearInterval(intervalId1); // Stop automatic rotation for carousel 1
    });
    document.getElementById('nextBtn1').addEventListener('click', function() {
        nextImage1();
        clearInterval(intervalId1); // Stop automatic rotation for carousel 1
    });

    // Carousel 2
    let index2 = 0;
    const images2 = document.querySelectorAll('#carousel2 img');
    const totalImages2 = images2.length;
    let intervalId2 = null; // Store the interval ID for carousel 2

    function showImage2(idx) {
        images2.forEach((image, i) => {
            if (i === idx) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage2() {
        index2 = (index2 + 1) % totalImages2;
        showImage2(index2);
        restartInterval2();
    }

    function prevImage2() {
        index2 = (index2 - 1 + totalImages2) % totalImages2;
        showImage2(index2);
        restartInterval2();
    }

    function jumpToPhoto2(idx) {
        index2 = idx;
        showImage2(index2);
        restartInterval2();
    }

    function restartInterval2() {
        clearInterval(intervalId2); // Clear the previous interval
        intervalId2 = setInterval(nextImage2, 3000); // Restart the interval
    }

    // Automatically advance to the next image every 3 seconds
    restartInterval2();

    // Show the first image initially
    showImage2(index2);

    // Add event listeners to navigation arrows for carousel 2
    document.getElementById('prevBtn2').addEventListener('click', function() {
        prevImage2();
        clearInterval(intervalId2); // Stop automatic rotation for carousel 2
    });
    document.getElementById('nextBtn2').addEventListener('click', function() {
        nextImage2();
        clearInterval(intervalId2); // Stop automatic rotation for carousel 2
    });

    // Add or remove the navbar-sticky class based on the scroll position
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
});
