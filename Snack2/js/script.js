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

const newArray = teamsFootball.map( team => {
    // let {nameTeam, fouls} = team;
    team.fouls = randomNum (0,50);
    team.score = randomNum (0,50);
    console.log(team);
    return {
        nameTeam : team.nameTeam,       
        fouls    : team.fouls,
    };
    // return `${nameTeam}, falli subiti: ${fouls}`;

    // return nameTeam + " falli subiti :" + fouls; // sintassi alternativa
    
    // return nameTeam + fouls;

});

console.log(teamsFootball);

console.log(newArray);











