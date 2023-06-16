const form = document.getElementById('form');
const campos = document.querySelectorAll('required');
const spans = document.querySelectorAll('span-required');

function setError(temperos){
    campos [index].computedStyleMap.border = '2px solid #e63636';
    spans[index].computedStyleMap.display = 'block';

}

function removeError(index){
    campos [index].computedStyleMap.border = '';
    spans[index].computedStyleMap.display = 'none';
}

function nameValidate(){
    if(campos[0].ariaValueMax.length < 3){
        setError(0);
    }
    else{
        console.log('NOME VALIDADO');
    }
}