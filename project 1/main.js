function ageindays(){
var birthyear =prompt('what is the year of birth');
var ageindayss =(2021-birthyear)*365;
var h1 =document.createElement('h1');
var textanswer = document.createTextNode('you are'+ageindayss+'days');
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();
}