console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);
let r=1;
let b=1;
let g=1;
let y=1;
function onReady(){
    console.log('in onReady');
    //button clicked - corresponding color will appear
    $('#red-btn').on('click', redClicker);
    $('#blue-btn').on('click', blueClicker);
    $('#green-btn').on('click', greenClicker);
    $('#yellow-btn').on('click', yellowClicker);
    //button clicked - corresponding color counter will 
    //show how many of that color box there are.
    $('#red-btn').on('click', redCounter);
    $('#blue-btn').on('click', blueCounter);
    $('#green-btn').on('click', greenCounter);
    $('#yellow-btn').on('click', yellowCounter);
    //when you click on a box, THAT box will disappear
    $('.all-blocks').on('click','.red', remover);
    $('.all-blocks').on('click','.blue', remover);
    $('.all-blocks').on('click','.green', remover);
    $('.all-blocks').on('click','.yellow', remover);
    //when you remove a box, the counter will go down
    //to match.
    $('.all-blocks').on('click','.red', redDownCounter);
    $('.all-blocks').on('click','.blue', blueDownCounter);
    $('.all-blocks').on('click','.green', greenDownCounter);
    $('.all-blocks').on('click','.yellow', yellowDownCounter);
}
//add's a box when the corresponding box is clicked
function redClicker(){
    $('.all-blocks').append('<p class=red>🟥</p>');
}
function blueClicker(){
    $('.all-blocks').append('<p class=blue>🟦</p>');
}
function greenClicker(){
    $('.all-blocks').append('<p class=green>🟩 </p>');
}
function yellowClicker(){
    $('.all-blocks').append('<p class=yellow>🟨</p>');
}
function remover(){
    $(this).remove();
}
//COUNTER FUNCTIONS
function redCounter(){
    r++;
    $('#red-count').text(r);
};
function blueCounter(){
    b++;
    $('#blue-count').text(b);
};
function greenCounter(){
    g++;
    $('#green-count').text(g);
};
function yellowCounter(){
    y++;
    $('#yellow-count').text(y);
};
//REMOVER COUNTER FUNCTIONS
function redDownCounter(){
    r--;
    $('#red-count').text(r);
    if(r<1){
        r=1;
    }
};
function blueDownCounter(){
    b--;
    $('#blue-count').text(b);
    if(b<1){
        b=1;
    }
};
function greenDownCounter(){
    g--;
    $('#green-count').text(g);
    if(g<1){
        g=1;
    }
};
function yellowDownCounter(){
    y--;
    $('#yellow-count').text(y);
    if(y<1){
        y=1;
    }
};