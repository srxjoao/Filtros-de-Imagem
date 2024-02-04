//Acessando os elementos HTML...

//Acessando os Pixels da Imagem ...
var canvas = document.getElementById('canvas'),  
context = canvas.getContext('2d'),  

//Cria a nova imagem aonde vamos manipular os pixels..
image = new Image(); 
image.src = "cherly.jpg";


function aumenta_vermelho(val, index, array) {
    if ((index + 1) % 4 == 0) {
        let c1 = array[index - 3];
        let c_vermelho = c1 *1.25;
        array[index - 3] = c_vermelho;
    }
}


function aumenta_verde(val, index, array) {
    if ((index + 1) % 4 == 0) {
        let c2 = array[index - 2];
        let c_verde = c2 *1.25;
        array[index - 2] = c_verde;
    }
}

const aumenta_azul = function(val, index, array){  
  if((index+1) % 4 == 0){
    let blue = array[index-1];
    let c_blue = blue *1.25;
    array[index-1] =  c_blue
  }
}

function sepia(value, index, array) {
    if ((index + 1) % 4 == 0) {

        let r = array[index - 3];
        let g = array[index - 2];
        let b = array[index - 1];

        let novo_R = r * 0.393 + g * 0.769 + b * 0.189;
        let novo_G = r * 0.349 + g * 0.686 + b * 0.168;
        let novo_B = r * 0.272 + g * 0.534 + b * 0.131;

        array[index - 3] = novo_R;
        array[index - 2] = novo_G;
        array[index - 1] = novo_B;
    }
}

const troca_canais = function (val, index, array) {
  if ((index + 1) % 4 == 0) {
     let r = array[index -3]
     let g = array[index -2]
     let b = array[index -1]

    array[index-1] = g;
    array[index-3] = b;
    array[index-2] = r;

    }
  }

function branco_e_preto(value, index, array) {
    if ((index + 1) % 4 == 0) {
        let red =   array[index- 3];
        let green = array[index- 2];
        let white = array[index- 1];

        let separador = 380
        let cor = (red + green + white);
        if (cor > separador) {

            array[index - 3] = 0;
            array[index - 2] = 0;
            array[index - 1] = 0;
        }
        else {
            array[index - 3] = 255;
            array[index - 2] = 255;
            array[index - 1] = 255;
        }
    }
}

const escala_cinza = (value, index, array) => {
    if ((index + 1) % 4 === 0) {
        let r = array[index - 3];
        let g = array[index - 2];
        let b = array[index - 1];

        let gray = r * 0.2126 + g * 0.7152 + b * 0.0722;

        array[index - 3] = gray;
        array[index - 2] = gray;
        array[index - 1] = gray;
    }
}

function negativo(val, index) {
    if ((index + 1) % 4 == 0) {
        return val;
    }
    else {
        return 255 - val;
    }
}
//funções para os botoes
function Neg_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height),      
    negdata = idata.data.map(negativo);
    idata.data.set(negdata);    
    context.putImageData(idata, 0, 0);  

} 


function Red_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);      
    idata.data.map(aumenta_vermelho);    
    context.putImageData(idata, 0, 0); 
}

function Green_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);      
    idata.data.map(aumenta_verde);
    context.putImageData(idata, 0, 0);   
}

function Blue_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);      
    idata.data.map(aumenta_azul);
    context.putImageData(idata, 0, 0);   
}

function Gray_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);          
    idata.data.map(escala_cinza);    
    context.putImageData(idata, 0, 0);   
}  

function Sepia_Button_onclick() {  
var idata = context.getImageData(0, 0, canvas.width, canvas.height);    
    idata.data.map(sepia);
    context.putImageData(idata, 0, 0);   
}  

function Swap_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);             
    idata.data.map(troca_canais);
    context.putImageData(idata, 0, 0);   
}  


function Black_Button_onclick() {  
    var idata = context.getImageData(0, 0, canvas.width, canvas.height);      
    idata.data.map(branco_e_preto);       
    context.putImageData(idata, 0, 0);   
} 

//Carrega os pixels da imagem original na nova imagem onde aplicaremos os filtros.
image.onload = function () {  
    context.clearRect(0, 0, canvas.width, canvas.height);  
    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, context.canvas.width, context.canvas.height);  
};