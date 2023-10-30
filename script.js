document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('.button');
    var resultElement = document.getElementById('result');
    var darkModeButton = document.getElementById('darkModeButton');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            this.classList.toggle('selected');
            calculateBitmask();
        });
    });

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });

    function calculateBitmask() {
        var selectedButtons = document.querySelectorAll('.button.selected');
        var bitmask = 0;

        selectedButtons.forEach(function (button) {
            var value = parseInt(button.getAttribute('data-value'));
            bitmask |= value;
        });

        var bitmaskString = bitmask.toString(16).padStart(4, '0');
        resultElement.textContent = 'monster_ai: 0x' + bitmaskString;
    }

    // Initial calculation on page load
    calculateBitmask();

    // Detect and set dark mode based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
});
