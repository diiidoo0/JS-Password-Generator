"use strict";
let $ = (id) => {
    return document.getElementById(id);
};

function generatePassword(passLength, buffer) {
    let passwordBuffer = '';
    for(let i=0; i<passLength; i++) {
        /*  Generate two random numbers that each correspond
        to a position of either an array, or a character in the buffer  */
        const INDEX_ARRAY = Math.round(Math.random() * (buffer.length - 1));
        const INDEX_CHAR = Math.round(Math.random() * (buffer[INDEX_ARRAY].length - 1));
        
        //  Generate a string by grabbing a character from the array randomly
        passwordBuffer += buffer[INDEX_ARRAY][INDEX_CHAR].toString();        
    }
    return passwordBuffer;
};

function copyContent(input) {
    navigator.clipboard.writeText(input);
};

const CHAR_BUFFER = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t', 'u','v','w', 'x','y','z'],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [".", "-", "@", ",", "/", "*", "&", "%", "#", "!"],
];

window.addEventListener("load", () => {
    let inputText = $("passField"); 
    let numberOfCharacters = $("numberOfChars");

    //  Clear fields on page reload
    inputText.value = '';
    numberOfCharacters.value = 8;

    $("generate").addEventListener("click", () => {
        if(!(numberOfCharacters.value < 8 || numberOfCharacters.value > 24)) inputText.value = generatePassword(numberOfCharacters.value, CHAR_BUFFER);
        else window.alert("Password length must be in the range 8-24!");     
    });

    $("copy").addEventListener("click", () => {
        copyContent(inputText.value);  
    });
});