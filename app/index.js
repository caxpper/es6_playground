
class Person{

    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person{

    constructor(name,sentence){
       super(name);
       this.sentence = sentence;
    }

    saySentence(){
        return this.sentence;
    }

    sayBye(){
        return `My name is ${this.name}, good bye.`;
    }

    sayHello(){
        return super.sayHi() + 'I\'m super person now';
    }
}

const bob = new SuperPerson('Bob','Up up and Bob\'s away!');

console.log('Bob: ', bob.sayHi());
console.log('Bob: ', bob.sayBye());
console.log('Bob: ', bob.saySentence());
console.log('Bob: ', bob.sayHello());