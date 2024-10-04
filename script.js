document.addEventListener("DOMContentLoaded", function() {
    const progress = document.querySelector('.progress');
    let width = 0;

    function animateProgressBar() {
        if (width >= 100) {
            width = 0; // Reset for continuous animation
        } else {
            width++;
            progress.style.width = width + '%';
        }
        requestAnimationFrame(animateProgressBar);
    }

    animateProgressBar();

    const button = document.querySelector('.link-button');
    let redirectTimeout = setTimeout(function() {
        window.location.href = 'https://garrisonbishop.com';
    }, 15000); // 15 seconds

    button.addEventListener('click', function() {
        clearTimeout(redirectTimeout);
        // Add any additional button click handling here
    });
});
