const cardNoElement = document.getElementById('cardNo');
const nameElement = document.getElementById('name');
const validityElement = document.getElementById('validity');
const cvcElement = document.getElementById('cvc');
const spacePositions = [4, 9, 14];

cardNoElement.addEventListener('keydown', (ev) => {
    const enteredChar = ev.key;
    const isBackSpaceKey = enteredChar === "Backspace";
    const isNumberKey = !isNaN(parseInt(enteredChar, 10));
    const text = ev.target.value;
    if(!isNumberKey && !isBackSpaceKey) {
        ev.preventDefault();
    } else if(spacePositions.indexOf(text.length) !== -1 && !isBackSpaceKey) {
        ev.target.value = text + " ";
    }
});

cvcElement.addEventListener('keydown', (ev) => {
    const enteredChar = ev.key;
    const isNumberKey = !isNaN(parseInt(enteredChar, 10));
    const isBackSpaceKey = enteredChar === "Backspace";
    if(!isNumberKey && !isBackSpaceKey) {
        ev.preventDefault();
    }
});
validityElement.addEventListener('keydown', (ev) => {
    const enteredChar = ev.key;
    const isNumberKey = !isNaN(parseInt(enteredChar, 10));
    const isBackSpaceKey = enteredChar === "Backspace";
    const text = ev.target.value;
    if(!isNumberKey && !isBackSpaceKey) {
        ev.preventDefault();
    } else if(text.length === 2 && !isBackSpaceKey) {
        ev.target.value = `${text}/`;
    }
});
