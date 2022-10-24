/*
    Written by: Dagem Woldeyohannes
    Date: October 24, 2022
*/

const cont = document.querySelector('.grid-container');
const mainDiv = document.createElement('div');
mainDiv.classList.add = 'main-container';

var counter = 0;
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid-style');
        grid.classList.add('grid' + (++counter));
        row.appendChild(grid);
        grid.addEventListener('mouseover', function() {
            grid.classList.add('grid-style-black');
        });
    }
    mainDiv.appendChild(row);
}

cont.appendChild(mainDiv);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    const noGrid = window.prompt('How many squares per side do you want on the new grid?');
    cont.innerHTML = "";

    const mainDiv = document.createElement('div');
    mainDiv.classList.add = 'main-container';

    var counter = 0;
    let perc = 960 / noGrid;
    for (let i = 0; i < noGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < noGrid; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid-style');
            grid.classList.add('grid' + (++counter));
            row.appendChild(grid);
            grid.style.width = perc + 'px';
            grid.style.height = perc + 'px';
            console.log(perc);
            grid.addEventListener('mouseover', function() {
                grid.classList.add('grid-style-black');
            });
        }
        mainDiv.appendChild(row);
    }
    cont.appendChild(mainDiv);
});
