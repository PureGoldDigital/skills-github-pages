 // Countdown timer for redirect
        let countdown = 10;
        const countdownElement = document.getElementById('countdown');
        
        const timer = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = 'index.html';
            }
        }, 1000);

        // Optional: Add some interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to floating elements for fun interaction
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(element => {
                element.addEventListener('click', function() {
                    this.style.transform = 'scale(1.5) rotate(360deg)';
                    this.style.transition = 'transform 0.5s ease';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 500);
                });
            });
        });
