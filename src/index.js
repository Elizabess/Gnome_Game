document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        gameContainer.appendChild(cell);
    }

    const img = document.createElement('img');
    img.src = 'src/goblin.png'; 
    img.className = 'character';
    gameContainer.appendChild(img);
    document.body.appendChild(gameContainer);

    function getRandomCell() {
        const cells = document.querySelectorAll('.cell');
        const randomIndex = Math.floor(Math.random() * cells.length);
        return cells[randomIndex];
    }

    setInterval(() => {
        const currentCell = getRandomCell();
        currentCell.appendChild(img.cloneNode());
    }, 1000);
});