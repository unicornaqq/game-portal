// Game Portal JavaScript
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Load games dynamically
document.addEventListener('DOMContentLoaded', function() {
    const gamesContainer = document.getElementById('games-container');
    if (gamesContainer) {
        const games = [
            { name: '2048', description: '经典数字合并游戏', link: '2048.html' },
            { name: '马里奥', description: '经典平台跳跃游戏', link: 'mario.html' }
        ];
        
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'col-md-4 mb-4';
            gameCard.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <p class="card-text">${game.description}</p>
                        <a href="${game.link}" class="btn btn-primary">开始游戏</a>
                    </div>
                </div>
            `;
            gamesContainer.appendChild(gameCard);
        });
    }
});

// Handle contact form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快回复您。');
    this.reset();
});