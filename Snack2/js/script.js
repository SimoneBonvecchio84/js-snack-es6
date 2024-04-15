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




const newArray = teamsFootball.map(({nameTeam, fouls})=>{
    
    fouls = randomNum (1,50);

    return `${nameTeam}, falli subiti: ${fouls}`;
    

});



console.log(newArray);











