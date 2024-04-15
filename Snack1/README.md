#CREARE ARRAY DI OGGETTI BICI DA CORSA
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  nome e peso.
  Stamapre a schermo la bici con peso minore utilizzando destructuring e template literals.

  Creo un Array di oggetti conteneti nome della bici ed il suo peso
  cre tag hyml dove andro a stampare con teplate literals il nome e il peso della bici più leggera.

  Inizializziamo le variabili minWeight e minName con arrayBikes[0].weingth e arrayBikes[0].name ovvero con il peso e il nome della prima bici dell'array.

  // LOGICA

  Creiamo un ciclo forEach che ci permetterà di scorrere all interno dell'array di oggetti.
  all inizio del ciclo abbiamo impostato minWeight e minName ugale al peso e al nome della prima bici.
  Ad ogni itarazione del ciclo confrontiamo il peso della bici corrente.
  Se il peso della bici corrente è inferiore a minWheit aggiorna il peso della bici corrente

  Condizione
   Se il peso della bici corrente è minore di minWeight:
    Aggiorna minWeight con il peso della bici corrente (curBike.weight)
    Aggiorna minName con il nome della bici corrente (curBike.name)

   Altrimenti, 
    passa alla prossima bici 
 
// OUTPUT

  stampo in pagina attravaerso minBike.innerHTML e templateliterals il nome e il peso della bici più leggera.



