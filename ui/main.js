var button = document.getElementbyId('counter');
var counter =0;
button.onClick = function(){
    

    counter+-1;
    var span= document.getElementbyId('myspan');
    span.innerHTML=counter.toString();
};