const form = document.querySelector('#form'); 
form.addEventListener('submit',function(e){ 
    e.preventDefault(); 
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if(!weight){
        result('Peso Invalido', false);
        return;
    }

    if(!height){
        result('Altura Invalida', false);
        return;
    }

    const imc = getImc(weight,height);
    const nivelImc = getLevelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc})`;

    result(msg, true);
});

const getLevelImc = (imc) => {
    const level = ['Abaixo do peso','Peso normal','Peso Normal','Sobrepeso','Obesidade grau 1',
    'Obesidade grau 2','Obesidade grau 3'];

    if (imc >= 39.9) return level[5];

    if (imc >= 34.9) return level[4];
 
    if (imc >= 29.9) return level[3];
    
    if (imc >= 24.9) return level[2];
    
    if (imc >= 18.5) return level[1];

    if (imc < 18.5) return level[0];
};

const getImc = (weight, height) => {
    const imc = weight / height**2;
    return imc.toFixed(2);
};

const createP = () => {
    const p = document.createElement('p'); 
    return p;
};

const result = (msg, isValid) => {
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = '';

    const p = createP();
    
    if (isValid) {
        p.classList.add('paragrafo-result');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultDiv.appendChild(p); 
};