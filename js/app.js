const mainDiv = document.createElement('div');
mainDiv.classList.add = 'main-container';

var counter = 0;
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.focus();
        grid.classList.add('grid-style');
        grid.classList.add('grid' + (++counter));
        row.appendChild(grid);
        grid.addEventListener('mouseover', function() {
            grid.classList.add('grid-style-black');
        });
    }
    mainDiv.appendChild(row);
}

document.body.appendChild(mainDiv);


// for (let k = 0; k < (i * j); k++) {
    
// }