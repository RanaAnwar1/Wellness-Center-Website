document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('contactConfirmation').style.display = 'block';
        this.reset();
        setTimeout(() => {
            document.getElementById('contactConfirmation').style.display = 'none';
        }, 5000);
    }, 1000);
});


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});