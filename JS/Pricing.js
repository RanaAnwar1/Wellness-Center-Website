document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
const billingToggle = document.getElementById('billing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const annualLabel = document.getElementById('annual-label');
const priceElements = document.querySelectorAll('.amount');

billingToggle.addEventListener('change', function () {
    if (this.checked) {
        
        monthlyLabel.classList.remove('active');
        annualLabel.classList.add('active');

        priceElements.forEach(element => {
            element.textContent = element.getAttribute('data-annual');
        });

        document.querySelectorAll('.period').forEach(el => {
            el.textContent = '/month (billed annually)';
        });

        document.querySelectorAll('.annual-savings').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        
        monthlyLabel.classList.add('active');
        annualLabel.classList.remove('active');

        priceElements.forEach(element => {
            element.textContent = element.getAttribute('data-monthly');
        });

        document.querySelectorAll('.period').forEach(el => {
            el.textContent = '/month';
        });

        document.querySelectorAll('.annual-savings').forEach(el => {
            el.style.display = 'block';
        });
    }
});




function updateCountdowns() {
    const countdownTimers = document.querySelectorAll('.countdown-timer');

    countdownTimers.forEach(timer => {
        const endDate = new Date(timer.dataset.end).getTime();
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft > 0) {
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            
            timer.querySelector('.days').textContent = days.toString().padStart(2, '0');
            timer.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            timer.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
            timer.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            
            timer.innerHTML = '<div class="countdown-unit expired">Expired</div>';
        }
    });
}


setInterval(updateCountdowns, 1000);
updateCountdowns();
