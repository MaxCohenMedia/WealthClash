document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.mobile-menu-icon');
    var mobileMenu = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', function () {
        // Check if the menu is currently active
        if (mobileMenu.classList.contains('active')) {
            // Menu is open, start transition to 0
            mobileMenu.style.maxHeight = '0';
        } else {
            // Menu is closed, set max-height for transition start and then to scrollHeight for end
            mobileMenu.style.maxHeight = '1px'; // Trigger reflow for transition
            setTimeout(() => {
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
            }, 10); // Small delay to allow CSS to catch the change
        }
        // Toggle the 'active' class
        mobileMenu.classList.toggle('active');
    });
});
