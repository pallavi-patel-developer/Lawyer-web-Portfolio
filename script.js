// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll effect to links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event for header styling if needed
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
            header.style.position = 'fixed';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            header.style.position = 'absolute';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Close other items
            faqQuestions.forEach(item => {
                if(item !== question) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
