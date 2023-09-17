const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/i;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

//NAME VALIDATE
function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else{
        removeError(0);
    }
}

function nameValidate2(){
    if(campos[1].value.length < 3)
    {
        setError(1);
    }
    else{
        removeError(1);
    }
}

//EMAIL VALIDATE
function emailValidate(){
    if(emailRegex.test(campos[2].value))
    {
        removeError(2);
    }else{
        setError(2);
    }
}

//PASSWORD VALIDATE

function mainPassword(){
    if(campos[3].value.length < 8){
        setError(3);
    }else{
        removeError(3);
    }
}
