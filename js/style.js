//BIENVENUE !
let alphab = ["B","I","E","N","V","E","N","U","E"," ","!"," ","B","I","E","N","V","E","N","U","E"," ","!"," "];
var x=0;
function ecriture(){
    document.getElementById("ecrit").firstElementChild.innerHTML = alphab[x]+alphab[x+1]+alphab[x+2]+alphab[x+3]+alphab[x+4]+alphab[x+5]+alphab[x+6]+alphab[x+7]+alphab[x+8]+alphab[x+9]+alphab[x+10]+alphab[x+11];
    if(x<10){
    x++;
    }else{
    x=0;
    }
}
setInterval(ecriture,300)
// end BIENVENUE !

/* trets projet */
let t = ["_"," ","_"," "];
var y=0;
function tret(){
    if(y<1){
    y++;
    }else{
    y=0;
    }document.getElementById("trets").firstElementChild.innerHTML = "Projet"+t[y];

}
setInterval(tret,500)
/* end trets projet */
