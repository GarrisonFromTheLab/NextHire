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
});