// Botoes

const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");

// Lampadas

const lamp = document.getElementById ("lamp");

function isLampBroken () {

    return lamp.src.indexOf ('Quebrada') > 0;
}

function lampOn () {

    if (!isLampBroken () ) {
    lamp.src = './img/Ligada.jpg';
    }
      

}

turnOn.addEventListener ('click', lampOn);

function lampOff () {
    if (!isLampBroken ()){
    
    lamp.src ="./img/Desligada.jpg";
    }
   
    
}

turnOff.addEventListener ('click', lampOff);

function lampBroke () {

    lamp.src ="./img/Quebrada.jpg";

}
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroke);