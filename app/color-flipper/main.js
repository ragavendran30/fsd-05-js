/*
1.Trigger event when user click on the Button -DONE
2.Write the function to generate random colors
3.Apply generated random colors to Body Tag

*/

//1.trigger event when user click on the button -done
let myButton = document.getElementById('color-generator');

myButton.addEventListener('click',function(){
let bodytag = document.getElementById('body-tag'),
h1tag = document.getElementById('color');


bodytag.style.backgroundColor = generateRandomColor();
h1tag.innerHTML = generateRandomColor();
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//2.write a function to generate color
function generateRandomColor(){

    //rgb(0-255 0-255 0-255)

    let red, green, blue, style,
    head = 'rgb(';
    seperator = ' ';
    tail = ')';
    red = getRandomInt(0, 255);
    green = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);

    style = head + red + seperator + green + seperator + blue + tail;
    return style;
}