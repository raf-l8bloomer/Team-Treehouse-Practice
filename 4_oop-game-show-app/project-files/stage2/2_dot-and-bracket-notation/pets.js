const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// /*DOT NOTATION*/
// console.log(ernie.age);
// console.log(ernie.breed);

// ernie.bark();

// /*BRACK NOTATION*/
// console.log(ernie['age']);
// console.log(ernie['breed']);

// ernie['bark']();

// var prop =  'breed';
// ernie[prop];

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';
console.log(ernie);