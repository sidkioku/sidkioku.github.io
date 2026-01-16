document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('apology-btn');
    
    btn.addEventListener('click', () => {
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FF69B4', '#00BFFF', '#32CD32']
        });

        // Change button text and style
        btn.textContent = "Juhu! Danke! ❤️";
        btn.style.background = "#059669";
        btn.disabled = true;
        btn.style.cursor = "default";
        btn.style.transform = "none";
        
        // Optional: Launch a second burst after a delay
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 500);
    });
});
