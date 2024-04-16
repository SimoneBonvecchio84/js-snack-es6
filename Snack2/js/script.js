// Creo Array di Oggetti di squadre di calcio

const teamsFootball = [
    {
        nameTeam : "Milan",
        score: 0,
        fouls: 0,
    },
    {
        nameTeam : "Inter",
        score: 0,
        fouls: 0,
    },
    {
        nameTeam : "Napoli",
        score: 0,
        fouls: 0,
    },
    {
        nameTeam : "Roma",
        score: 0,
        fouls: 0,
    }
];


// copia l array base e ne crea uno nuovo e ci ridarà lo stesso numero di elementi di partenza ma modificati. 

const newArray = teamsFootball.map(({nameTeam, fouls})=>{
    
    fouls = randomNum (1,50);

    return `${nameTeam}, falli subiti: ${fouls}`;

    // return nameTeam + " falli subiti :" + fouls; // sintassi alternativa
    

});



console.log(newArray);











