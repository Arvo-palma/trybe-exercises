function textBoxBackgroundColor () {
    let backColorTextBox = document.createElement('input');
    backColorTextBox.className = 'btn-backColor';
    backColorTextBox.defaultValue = 'Cor de fundo';
    document.querySelector('.controls').appendChild(backColorTextBox);
};

textBoxBackgroundColor();

function textBoxTextColor () {
    let textColorTextBox = document.createElement('input');
    textColorTextBox.className = 'btn-textColor';
    textColorTextBox.defaultValue = 'Cor do texto';
    document.querySelector('.controls').appendChild(textColorTextBox);
};

textBoxTextColor();

function textBoxFontSize () {
    let fontSizeTextBox = document.createElement('input');
    fontSizeTextBox.className = 'btn-fontSize';
    fontSizeTextBox.defaultValue = 'Tamanho da letra';
    document.querySelector('.controls').appendChild(fontSizeTextBox);
};

textBoxFontSize();

function textBoxLineSpace () {
    let lineSpaceTextBox = document.createElement('input');
    lineSpaceTextBox.className = 'btn-lineSpace';
    lineSpaceTextBox.defaultValue = 'Espaçamento entre linhas';
    document.querySelector('.controls').appendChild(lineSpaceTextBox);
};

textBoxLineSpace();

function textBoxFontFamily () {
    let fontFamilyTextBox = document.createElement('input');
    fontFamilyTextBox.className = 'btn-fontFamily';
    fontFamilyTextBox.defaultValue = 'Fonte do texto';
    document.querySelector('.controls').appendChild(fontFamilyTextBox);
};

textBoxFontFamily();

function changeBackColor (event) {
    event.target = document.body.style.backgroundColor;
};

backColorTextBox.addEventListener('keyup', changeBackColor);