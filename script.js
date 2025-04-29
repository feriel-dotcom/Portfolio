function toggleDetails(id) {
    const element = document.getElementById(id);

    if (!element.classList.contains('open')) {
        element.style.display = 'block';
        setTimeout(() => {
            element.classList.add('open');
            element.style.maxHeight = '300px';
            element.style.opacity = '1';
        }, 10);
    } else {
        element.classList.remove('open');
        element.style.maxHeight = '0';
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }
}