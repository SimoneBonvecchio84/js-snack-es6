const automobili = [
    { marca: "Toyota", 
      modello: "Yaris", 
      alimentazione: "ibrida" 
    },
    { marca: "Volkswagen", 
      modello: "Golf", 
      alimentazione: "benzina" 
    },
    { marca: "BMW", 
      modello: "i3", 
      alimentazione: "elettrico" 
    },
    { marca: "Fiat", 
      modello: "Panda", 
      alimentazione: "metano" 
    },
    { marca: "Renault", 
      modello: "Clio", 
      alimentazione: "diesel" 
    },
    { marca: "Tesla", 
      modello: "Model S", 
      alimentazione: "elettrico" 
    },
    { marca: "Ford", 
      modello: "Focus", 
      alimentazione: "benzina" 
    },
    { marca: "Audi", 
      modello: "A3", 
      alimentazione: "diesel" 
    },
    { marca: "Mercedes-Benz", 
      modello: "EQC", 
      alimentazione: "elettrico" 
    },
    { marca: "Opel", 
      modello: "Corsa", 
      alimentazione: "gpl" 
    }
  ];

  let benzina = [];
  let diesel = [];
  let altro = [];


  automobili.forEach((curAuto)=>{
      if(curAuto.alimentazione === "benzina") {
        benzina.push(curAuto);
      } else if(curAuto.alimentazione === "diesel") {
        diesel.push(curAuto);
      } else {
        altro.push(curAuto);
      }


  });

  console.log(benzina);
  console.log(diesel);
  console.log(altro);