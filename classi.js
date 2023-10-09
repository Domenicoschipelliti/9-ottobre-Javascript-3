


// Esercizio 1:


class User{
    constructor(_firstName,_lastName,_age,_location){
      this.firstname=_firstName
      this.lastname=_lastName
      this.age=_age
     this.location=_location
    }
    confronto=function(us2){
      if (this.age>us2.age) {
        console.log(`${this.firstname} è più vecchio di ${us2.firstname}`) 
      }
      else{
        console.log(`${us2.firstname} è più vecchio di ${this.firstname}`) 
      }
    }
    
}

const persona=new User(
  "Marco",
 "Masini",
 "28",
 "Palermo",
)

const persona2=new User(
  "Luigi",
  "Mariottide",
  "40",
  "Catania",
)





const vecchio=persona.confronto(persona2);



// Fine esercizio 1



// Esercizio 2:
 const form=document.getElementsByTagName("form")
 const  petName= document.getElementById("test");
  const  ownerName=document.getElementById("test");
  const  pecies=document.getElementById("tes");
  const breed=document.getElementById("te");


class Pet{
  constructor(_petname,_ownername,_species,_breed){
        this.petName=_petname
        this.ownerName=_ownername
        this.species=_species
        this.breed=_breed
  }
  animal= function(speci2){
    if (this.species===speci2.species) {
      console.log(true)
    }else{
     console.log(false)
    }
  }
  
}



const owner=new Pet(
    "Fuffi",
    "Mario" ,
    "Cane",
    "Labrador",
)

const owner2=new Pet(
  "Ivan 32",
  "Sara",
  "Cane",
  "Meticcio",
)

const tipo=owner.animal(owner2)


const lista=[];




form.addEventListener('submit', (e)=> {
  e.preventDefault(); 
  const pet = new Pet(
   petNameInput.value,
   ownerNameInput.value,
   speciesInput.value,
   breedInput.value
  );
  lista.push(pet);
 console.log(lista);

 if (lista.length===2) {
  pet.confronto(lista[0].ownerName,lista[1].ownerName);
}
})





  




