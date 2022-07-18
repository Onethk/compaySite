
const smalltolarge = function(num){
    let middle1bagbig1 = document.querySelector(`.middle${num}bigbagpic1`);
    let middle1bagbig2 = document.querySelector(`.middle${num}bigbagpic2`);
    let middle1bagbig3 = document.querySelector(`.middle${num}bigbagpic3`);

    let middle1small1 = document.querySelector(`.div--bag${num}pic1`);
    let middle1small2 = document.querySelector(`.div--bag${num}pic2`);
    let middle1small3 = document.querySelector(`.div--bag${num}pic3`);

    middle1small1.addEventListener('mouseover', function(){
        middle1bagbig1.style.display = "block";
        middle1bagbig2.style.display = "none";
        middle1bagbig3.style.display = "none";
    });

    middle1small2.addEventListener('mouseover', function(){
        middle1bagbig1.style.display = "none";
        middle1bagbig2.style.display = "block";
        middle1bagbig3.style.display = "none";
    });

    middle1small3.addEventListener('mouseover', function(){
        middle1bagbig1.style.display = "none";
        middle1bagbig2.style.display = "none";
        middle1bagbig3.style.display = "block";
    });
}

const hr1 = document.querySelector('.hr1');
const hr2 = document.querySelector('.hr2');
const hr3 = document.querySelector('.hr3');

const middle1 = document.querySelector('.middle1');
const middle2 = document.querySelector('.middle2');
const middle3 = document.querySelector('.middle3');


hr1.addEventListener('mouseover', function(){
    middle1.style.display = "block";
    middle2.style.display = "none";
    middle3.style.display = "none";

    hr1.style.borderTop = "4px solid black";
    hr2.style.borderTop = "4px solid rgb(165, 163, 163)";
    hr3.style.borderTop = "4px solid rgb(165, 163, 163)";

    smalltolarge(1);
})

hr2.addEventListener('mouseover', function(){
    middle1.style.display = "none";
    middle2.style.display = "block";
    middle3.style.display = "none";

    hr2.style.borderTop = "4px solid black";
    hr1.style.borderTop = "4px solid rgb(165, 163, 163)";
    hr3.style.borderTop = "4px solid rgb(165, 163, 163)";

    smalltolarge(2);

})

hr3.addEventListener('mouseover', function(){
    middle1.style.display = "none";
    middle2.style.display = "none";
    middle3.style.display = "block";

    hr3.style.borderTop = "4px solid black";
    hr2.style.borderTop = "4px solid rgb(165, 163, 163)";
    hr1.style.borderTop = "4px solid rgb(165, 163, 163)";

    smalltolarge(3);
})

smalltolarge(1);
hr1.style.borderTop = "4px solid black";

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

/// HEART COLOR

const heart = document.querySelectorAll('.discount-tag');
const grayHeart = document.querySelectorAll('.grayheart');
const redHeart = document.querySelectorAll('.redheart');

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function(){
        grayHeart[i].classList.toggle('hidden');
        redHeart[i].classList.toggle('hidden');
    })
}

/// COLOR CHANGE

//cap 
function changeCapBlack(){
    document.querySelector('.capblack').classList.remove('hidden');
    document.querySelector('.capWhite').style.display = "none";
    document.querySelector('.cappink').style.display = "none";
}

function changeCapLightBlue(){
    document.querySelector('.capblack').classList.add('hidden');
    document.querySelector('.capWhite').style.display = "block";
    document.querySelector('.cappink').style.display = "none";
}

function changeCapPink(){
    document.querySelector('.capblack').classList.add('hidden');
    document.querySelector('.capWhite').style.display = "none";
    document.querySelector('.cappink').style.display = "block";
}

//bag
function changebagblack() {
    document.querySelector('.bag--black').classList.remove('hidden');
    document.querySelector('.bag--gray').style.display = "none";
    document.querySelector('.bag--pink').style.display = "none";
}

function changebaggray() {
    document.querySelector('.bag--black').classList.add('hidden');
    document.querySelector('.bag--gray').style.display = "block";
    document.querySelector('.bag--pink').style.display = "none";
}

function changebagpink() {
    document.querySelector('.bag--black').classList.add('hidden');
    document.querySelector('.bag--gray').style.display = "none";
    document.querySelector('.bag--pink').style.display = "block";
}

//shoe
function changeshoeblack(){
    document.querySelector('.shoe--black').classList.remove('hidden');
    document.querySelector('.shoe--white').style.display = "none";
}

function changeshoewhite(){
    document.querySelector('.shoe--black').classList.add('hidden');
    document.querySelector('.shoe--white').style.display = "block";
}

//Sliper
function changesliperblack(){
    document.querySelector('.sliper--black').classList.remove('hidden');
    document.querySelector('.sliper--blue').style.display = "none";
}

function changesliperwhite(){
    document.querySelector('.sliper--black').classList.add('hidden');
    document.querySelector('.sliper--blue').style.display = "block";
}

//hat
function changehatblack(){
    document.querySelector('.hat--black').classList.remove('hidden');
    document.querySelector('.hat--white').style.display = "none";
    document.querySelector('.hat--pink').style.display = "none";
}

function changehatwhite(){
    document.querySelector('.hat--black').classList.add('hidden');
    document.querySelector('.hat--white').style.display = "block";
    document.querySelector('.hat--pink').style.display = "none";
}

function changehatblue(){
    document.querySelector('.hat--black').classList.add('hidden');
    document.querySelector('.hat--white').style.display = "none";
    document.querySelector('.hat--pink').style.display = "block";
}

//handbag
function changehandbagblack(){
    document.querySelector('.handbag--black').classList.remove('hidden');
    document.querySelector('.handbag--brown').style.display = "none";
}

function changehandbagwhite(){
    document.querySelector('.handbag--black').classList.add('hidden');
    document.querySelector('.handbag--brown').style.display = "block";
}

//thigh
function changeThighBlack(){
    document.querySelector('.thighgardblack').classList.remove('hidden');
    document.querySelector('.thighgardwhite').style.display = "none";
}

function changeThighWhite(){
    document.querySelector('.thighgardblack').classList.add('hidden');
    document.querySelector('.thighgardwhite').style.display = "block";
}

//glouse
function changeglouesblack(){
    document.querySelector('.glouse-black').classList.remove('hidden');
    document.querySelector('.glouse-white').style.display = "none";
}

function changegloueswhite(){
    document.querySelector('.glouse-black').classList.add('hidden');
    document.querySelector('.glouse-white').style.display = "block";
}

//helmet
function changehelmetblack(){
    document.querySelector('.helmet--black').classList.remove('hidden');
    document.querySelector('.helmet--white').style.display = "none";
    document.querySelector('.helmet--blue').style.display = "none";
}

function changehelmetwhite(){
    document.querySelector('.helmet--black').classList.add('hidden');
    document.querySelector('.helmet--white').style.display = "block";
    document.querySelector('.helmet--blue').style.display = "none";
}

function changehelmetblue(){
    document.querySelector('.helmet--black').classList.add('hidden');
    document.querySelector('.helmet--white').style.display = "none";
    document.querySelector('.helmet--blue').style.display = "block";
}

//baseball
function changebaseballblack(){
    document.querySelector('.baseball-black').classList.remove('hidden');
    document.querySelector('.baseball-red').style.display = "none";
    document.querySelector('.baseball-blue').style.display = "none";
}

function changebaseballred(){
    document.querySelector('.baseball-black').classList.add('hidden');
    document.querySelector('.baseball-red').style.display = "block";
    document.querySelector('.baseball-blue').style.display = "none";
}

function changebaseballblue(){
    document.querySelector('.baseball-black').classList.add('hidden');
    document.querySelector('.baseball-red').style.display = "none";
    document.querySelector('.baseball-blue').style.display = "block";
}








