$( () => {
// write code below

console.log('hallo')

class Tomagotchi {
  constructor(name, hunger){
    this.name = name;
    this.hunger = hunger;
  }
  eat(){
    this.hunger--;
  }
}

const nyan = new Tomagotchi('nyan', 100);



console.log(nyan);
















// write code above
});
