const container = document.querySelector('.container');

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function rgbColor() {
    return 'rgb(' + randomNumber() +
        ', ' + randomNumber() + ', ' + randomNumber() + ')';
}

function drawItems(param) {
    container.style.cssText = 'grid-template-columns: repeat(' + param +
        ', 1fr); grid-template-rows: repeat(' + param + ', 1fr);'
    for (let i = 0; i < param ** 2; i++) {
        const divCreate = document.createElement('div');
        divCreate.classList.add('square');
        container.appendChild(divCreate);
    }
    squaresListener();
    resetButton();
}

function squaresListener() {
    const squares = document.querySelectorAll('.square');
    const colored = document.querySelectorAll('.colored');
    squares.forEach(function (e) {
        e.addEventListener('mouseenter', function (e) {
            this.classList.add('colored');
            this.style.cssText = 'background-color: ' + rgbColor() + ';';
        });
    });
    if (colored) {
        colored.forEach(function (e) {
            e.addEventListener('onchange', function (e) {
                console.log(this);
            })
        });
    }
}

// function reDrawItems() {
//     const squares = document.querySelectorAll('.container .square');
//     squares.forEach(function (e) {
//         container.removeChild(e);
//     });
//     let values = Number(prompt('escoge un numero del 1 al 100', ''));

//     if (values == String || values < 1 || values > 100) {
//         values = Number(prompt('entrada no valida,
//   plese type a number between 1 and 100', ''));
//     } else if (values >= 1 && values <= 100) {
//         console.log(values);
//         drawItems(values);
//     }
// }

function reDrawItems(values) {
    const squares = document.querySelectorAll('.container .square');
    squares.forEach(function (e) {
        container.removeChild(e);
    });
    if (values == String || values < 1 || values > 100) {
        alert('Entrada no valida, regresando a la secuencia de inicio....');
        drawItems(4);
    } else if (values >= 1 && values <= 100) {
        console.log(values);
        drawItems(values);
    }
}

function resetButton() {
    const squares = document.querySelectorAll('.container .square');
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', function (e) {
        squares.forEach(function (e) {
            e.classList.remove('colored');
            e.removeAttribute('style');
        })
    });
}

drawItems(4);

const numeric = document.querySelector('#numeric');

numeric.addEventListener('input', function (e) {
    reDrawItems(this.value);
});