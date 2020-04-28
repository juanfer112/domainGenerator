// Dominios a permutar
var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];
console.log("Muestra correctamente la consola");

function combinacion (){ 
 let arrayVariables = [pronoun, adj, noun];
 let  combinaVariables = "";

    for (var item of arrayVariables){
        combinaVariables += domainCreator(item);
    }
    console.log(combinaVariables);
    return combinaVariables;
}

function domainCreator(arguments){
    let words = "";
    for (var i=0; i<arguments.length; i++){
       console.log(arguments[i]);
        words=arguments[i];  
    }
    console.log(words);    
    return console.log(words);
}

   /* for (var i=0; i< pronoun.length; i++) {
       for (var j=0; j < adj.length; j++) {
            for (var k=0; k < noun.length; k++) {                       
               combinaVariables += pronoun[i]+adj[j]+noun[k] +".com"+" "; 
            }     
        }
    }*/ 
window.onload= () =>{
    document.getElementById("frase").innerHTML = combinacion();
}

// Dominios a permutar
/*var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];
console.log("Muestra correctamente la consola");

function combinacion (){ 
 let  combinaVariables = "";
    for (var i=0; i< pronoun.length; i++) {
       for (var j=0; j < adj.length; j++) {
            for (var k=0; k < noun.length; k++) {                       
               combinaVariables += pronoun[i]+adj[j]+noun[k] +".com"+" "; 
            }     
        }
    }
   console.log(combinaVariables);
   return combinaVariables;   
}
window.onload= () =>{
    document.getElementById("frase").innerHTML = combinacion();
}*/