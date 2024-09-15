
let squer = document.getElementById('squer');
let widthInput = document.getElementById('width');
let heightInput = document.getElementById('height');
let colorInput = document.getElementById('color');
let borderRadiusInput = document.getElementById('borderRadius');
let resetBtn = document.getElementById('rest');

let originalStyles = {
    width: '30vw',
    height: '40vh',
    backgroundColor: 'blue',
    borderRadius: '0px'
};


widthInput.addEventListener('input', () => {
    let widthValue = widthInput.value;
    squer.style.width = widthValue ? `${widthValue}vw` : originalStyles.width;
});


heightInput.addEventListener('input', () => {
    let heightValue = heightInput.value;
    squer.style.height = heightValue ? `${heightValue}vh` : originalStyles.height;
});


colorInput.addEventListener('input', () => {
    squer.style.backgroundColor = colorInput.value;
});

borderRadiusInput.addEventListener('input', () => {
    let borderRadiusValue = borderRadiusInput.value;
    squer.style.borderRadius = borderRadiusValue ? `${borderRadiusValue}px` : originalStyles.borderRadius;
});

resetBtn.addEventListener('click', () => {
    squer.style.width = originalStyles.width;
    squer.style.height = originalStyles.height;
    squer.style.backgroundColor = originalStyles.backgroundColor;
    squer.style.borderRadius = originalStyles.borderRadius;
});
