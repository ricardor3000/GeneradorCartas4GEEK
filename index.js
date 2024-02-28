let values = [
    "A",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "J",
    "Q",
    "K",
];

let symbols = [
    "♦",
    "♥",
    "♠",
    "♣"
];

let colores = [
    "red",
    "black",
]


let cardSymbolHeader = document.getElementById("card-symbol-header");
let cardValue = document.getElementById("card-value");
let cardSymbolFooter = document.getElementById("card-symbol-footer");


let randomValues = Math.floor(Math.random() * values.length );
let randomSymbols = Math.floor(Math.random() * symbols.length );
let randomColors = Math.floor(Math.random() * colores.length );

cardSymbolHeader.innerHTML= `<p class="${colores[randomColors]}" >${symbols[randomSymbols]}</p>`
cardValue.innerHTML=`<p class="${colores[randomColors]}">${values[randomValues]}</p>`;
cardSymbolFooter.innerHTML= `<p class="${colores[randomColors]}">${symbols[randomSymbols]}</p>`;
