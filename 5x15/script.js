// Seleccionamos las piezas y las celdas del tablero
const pieces = document.querySelectorAll('.piece');
const cells = document.querySelectorAll('.cell');

let draggedPiece = null;

// Añadimos eventos de arrastre a las piezas
pieces.forEach(piece => {
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragend', handleDragEnd);
});

cells.forEach(cell => {
    cell.addEventListener('dragenter', handleDragEnter);
    cell.addEventListener('dragover', handleDragOver);
    cell.addEventListener('dragleave', handleDragLeave);
    cell.addEventListener('drop', handleDrop);
});

function handleDragStart(e) {
    draggedPiece = e.target;
    // Añadimos un efecto visual opcional
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.dataset.type);
    setTimeout(() => {
        e.target.style.opacity = '0.5';
    }, 0);
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
    draggedPiece = null;
}

function handleDragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains('cell')) {
        e.target.classList.add('drag-over');
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragLeave(e) {
    if (e.target.classList.contains('cell')) {
        e.target.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    if (e.target.classList.contains('cell')) {
        e.target.classList.remove('drag-over');
        // Si la celda ya tiene una pieza, podrías decidir qué hacer (reemplazarla, ignorar, etc.)
        // Para este ejemplo, si hay una pieza ya, no la sobreescribimos.
        if (!e.target.querySelector('.piece')) {
            e.target.appendChild(draggedPiece);
        }
    }
}

