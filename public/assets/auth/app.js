// action label with input
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', () => {
        const row = input.closest('.form-row');
        if (input.value.trim() !== "") {
            row.classList.add('filled');
        } else {
            row.classList.remove('filled');
        }
    });
});
