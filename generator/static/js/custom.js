document.addEventListener('DOMContentLoaded', (event) => {
    const copyButton = document.getElementById('copyButton');
    const retryButton = document.getElementById('retryButton');
    const passwordAlert = document.querySelector('.password-alert');

    copyButton.addEventListener('click', () => {
        // Copy the password to the clipboard
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = passwordAlert.textContent;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Add animation class
        copyButton.classList.add('animate-copy');

        // Remove animation class after animation ends
        copyButton.addEventListener('animationend', () => {
            copyButton.classList.remove('animate-copy');
        });
    });

    retryButton.addEventListener('click', () => {
        location.reload();
    });
});
