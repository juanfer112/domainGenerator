// Dominios a permutar
var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];

// Dominios a permutar

function combinacion (){ 
 let  combinaVariables = [];
    for (var i=0; i< pronoun.length; i++) {
       for (var j=0; j < adj.length; j++) {
            for (var k=0; k < noun.length; k++) {                       
               /*combinaVariables += pronoun[i]+adj[j]+noun[k] +".com"+" "; */
               combinaVariables.push(pronoun[i].concat(adj[j], noun[k], ".com"))
            }     
        }
    }
    for (let item in combinaVariables){
        document.write("<h2>"+combinaVariables[item]+"</h2>");
    }  
}
window.onload= () =>{
    document.getElementById("frase").innerHTML = combinacion();
}