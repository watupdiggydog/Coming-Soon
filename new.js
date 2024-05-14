<script>
// Auto-scrolling function
function autoScroll() {
var container = document.querySelector('#hair-style-container .gallery-container');
    var scrollWidth = container.scrollWidth;
    var clientWidth = container.clientWidth;

    if (scrollWidth > clientWidth) {
        var scrollPos = 0; // Initialize scroll position

        // Scroll function
        function scroll() {
            // Increment scroll position
            scrollPos++;

            // Check if scroll position reaches the end
            if (scrollPos >= scrollWidth - clientWidth) {
                // Reset scroll position to the beginning
                scrollPos = 0;
            }

            // Set scroll position
            container.scrollLeft = scrollPos;

            // Call scroll function recursively
            requestAnimationFrame(scroll);
        }

        // Start scrolling
        scroll();
    }
}

// Call autoScroll function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
autoScroll();
});
</script>