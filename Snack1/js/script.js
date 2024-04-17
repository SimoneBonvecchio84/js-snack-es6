// Array di oggetti bici da corsa

const arrayBikes = [
    { name  : "Bianchi Oltre XR4", 
      weight: 6.8, 
    },
    { name  : "Specialized Tarmac SL7", 
      weight: 6.7, 
    },
    { name  : "Trek Emonda SLR 9", 
      weight: 6.2, 
    },
    { name  : "Cannondale SuperSix Evo", 
      weight: 7.0, 
    },
    { name  : "Pinarello Dogma F12", 
      weight: 6.5, 
    }
];

const minBikeElem = document.getElementById("minBike");
// let minWeight = arrayBikes[0].weight; 
// let minName = arrayBikes[0].name;

let minBike = arrayBikes[0];

for (let i = 1; i < arrayBikes.length; i++) {
    if (arrayBikes[i].weight < minBike.weight) {
            minBike = arrayBikes[i];
            console.log(minBike);
           
    }
}    


minBikeElem.innerHTML += `${minBike.name} ${minBike.weight}`;