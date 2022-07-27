class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;

  }
  
  get activity () {
    const today = new Date();
    const hour = today.getHours();
    console.log(hour);
    if (hour > 8 && hour <= 20){
      return 'playing';
    } else {
      return 'sleeping';
    }

  }

  get owner () {
    return this._owner;
  }

  set owner (owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }

  speak(){
    console.log(this.sound);
  }



}

const ernie = new Pet('dog', 1, 'pug', 'Woof!');
const vera = new Pet ('dog', 8, 'Border Collie', "yip yip!");
const scofield = new Pet ('dog', 6, 'Doberman');
const edel = new Pet ('dog', 7, 'German Shorthaired');

ernie.owner = 'Raf';
console.log(ernie.owner);
