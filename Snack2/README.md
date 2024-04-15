# SQUADRE DI CALCIO
Crea un array di oggetti di squadre di calcio
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l unica proprietà da compilare, le altre saranno tutte settate a 0.
Genera numeri random al posto degli 0 nelle altre proprieta:
Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti.
Stampiamo tutto in console.

// INPUT

Creo Array di oggetti di squadre di calcio
Dove inserisco tre chiavi: nome, punteggio e falli subiti.

// LOGICA

creo una costante newArray dove andrò ad utilizzare il metodo map sull array di partenza teamsFootball.
Questo metodo itera ciascun elemento dell'array e restituisce un nuovo array utilizzando una arrow function.

Passiamo il parametro{nameTeam} che sarà destrutturato, in questo modo potremmo estrarre il valore della nameTeam per ogni oggetto dell'array.

Creiamo una funzione esterna che genera numeri random. gli diamo due parametri in ingresso numMIn e numMax.

Richiamiamo le funzione all interno della variabile fouls che a sua volta si trovera dentro la arrow function del metodo mup.
inserendo due parametri min 1 e max 50.

// OUTPUT

nel retur della funzione grazie ai template literals inseriamo il nome del team e i falli che ha subito.

stampiami in console.

