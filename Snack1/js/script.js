// Array di oggetti bici da corsa

const arrayBikes = [
    { name: "Bianchi Oltre XR4", 
      weight: 6.8, 
    },
    { name: "Specialized Tarmac SL7", 
      weight: 6.7, 
    },
    { name: "Trek Emonda SLR 9", 
      weight: 6.2, 
    },
    { name: "Cannondale SuperSix Evo", 
      weight: 7.0, 
    },
    { name: "Pinarello Dogma F12", 
      weight: 6.5, 
    }
];

const minBike = document.getElementById("minBike");
let minWeight = arrayBikes[0].weight;
let minName = arrayBikes[0].name;
arrayBikes.forEach((curBike)=>{
    const { name, weight} = curBike;
    
      for (let i = 1; i < arrayBikes.length; i++) {
        if (arrayBikes[i].weight < minWeight) {
            minWeight = arrayBikes[i].weight;
            minName = arrayBikes[i].name;
        }
    }

    minBike.innerHTML = `${minName} ${minWeight}`
}) 