const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const upObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const fadeElements = document.querySelectorAll('.hidden');
fadeElements.forEach((el) => fadeObserver.observe(el));

const upElements = document.querySelectorAll('.slideUp');
upElements.forEach((el) => upObserver.observe(el));