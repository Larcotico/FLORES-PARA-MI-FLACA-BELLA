document.addEventListener('DOMContentLoaded', () => {
    const galaxy = document.getElementById('galaxy');
    const flowerContainer = document.getElementById('flower-container');
    const music = document.getElementById('music');

    function createStars() {
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = `${Math.random() * 2}px`;
            star.style.height = star.style.width;
            star.style.borderRadius = '50%';
            star.style.backgroundColor = '#fff';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            galaxy.appendChild(star);
        }
    }

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 10000);
    }

    setInterval(createFlower, 500);

    createStars();
});
