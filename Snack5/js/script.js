const persone = [{
    nome: "pippo",
    cognome: "rossi",
    età: 20,
},
{
    nome: "puppo",
    cognome: "bianchi",
    età: 90,
},
{
    nome: "peppo",
    cognome: "verdi",
    età: 6,
}
];

let infoPersone = [];

let siGuida = "Questa persona può guidare";

let noGuida = "Questa persona non può guidare";

persone.forEach((curPersona)=>{
    if(curPersona.età <= 60 && curPersona.età >= 18) {
        console.log("Questa persona può guidare", curPersona);
        infoPersone.push(curPersona, siGuida);
        
    } else {
        console.log("Questa persona non può guidare" , curPersona);
        infoPersone.push(curPersona, noGuida);
    }
    
});

console.log(infoPersone)

