document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');


    function toggleDropdown() {
        dropdownMenu.classList.toggle('show');
    }
    dropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        toggleDropdown();
    });
    document.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
    });
    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
