document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    
    const tabs = document.querySelectorAll(".tab");
    const schedules = document.querySelectorAll(".day-schedule");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            
            tabs.forEach(t => t.classList.remove("active"));
            schedules.forEach(s => s.classList.remove("active"));

            
            tab.classList.add("active");
            const day = tab.getAttribute("data-day").toLowerCase();
            const schedule = document.getElementById(day);
            if (schedule) schedule.classList.add("active");
        });
    });


});
