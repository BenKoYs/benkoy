//BIENVENUE !
let alphab = [" ","E","U","N","E","V","N","E","I","B"," ","!"," ","E","U","N","E","V","N","E","I","B"," ","!"];
var x=0;
function ecriture(){
    document.getElementById("ecrit").firstElementChild.innerHTML = alphab[x+11]+alphab[x+10]+alphab[x+9]+alphab[x+8]+alphab[x+7]+alphab[x+6]+alphab[x+5]+alphab[x+4]+alphab[x+3]+alphab[x+2]+alphab[x+1]+alphab[x];
    if(x<10){
    x++;
    }else{
    x=0;
    }
}
setInterval(ecriture,300)
// end BIENVENUE !

/* traits projet
let t = ["_"," ","_"," "];
var y=0;
function trait(){
    if(y<1){
    y++;
    }else{
    y=0;
    }document.getElementById("traits").firstElementChild.innerHTML = "Projet"+t[y];

}
setInterval(trait,500)
 end traits projet */

 // Alert Discord
function discordalert() {
    alert("Mon Discord: BenKoY#5158\nDiscord KBAB: https://discord.gg/CbNftHWk2f" )
}
 // end Alert Discord
