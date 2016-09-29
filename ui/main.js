var button = document.getElementbyId('counter');
button.onClick = function(){
    
var counter =0;
    counter+-1;
    var span= document.getElementbyId('myspan');
    span.innerHTML=counter.toString();
};