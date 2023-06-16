//Before classes
const newStudentObject = {
    name: "Megan",
    favIceCream: "Chocolate Peanut Butter",
    sayHello: () => console.log('Hello, my name is ' + newStudentObject.name + ' , my favourite ice cream is ' + newStudentObject.favIceCream)
}

const anotherNewStudentObject = {
    name: "Ian",
    favIceCream: "Cherry Garcia",
    sayHello: () => console.log('Hello, my name is ' + anotherNewStudentObject.name + ' , my favourite ice cream is ' + anotherNewStudentObject.favIceCream)
}
// anotherNewStudentObject.sayHello()

//After classes
// blueprint
class StudentObject {
    constructor(name, favIceCream){
        this.name = name;
        this.favIceCream = favIceCream;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and my favourite icecream is ${this.favIceCream}.`)
    }
}

const newStudent = new StudentObject('Gord', 'Netflix and Chill\'d')

// newStudent.sayHello()

const anotherNewStudentObjectCreatedFromAClass = new StudentObject('John', 'Strawberry')

anotherNewStudentObjectCreatedFromAClass.sayHello()

//Inheritance
////Is to create classes that are based on other classes
//To grab the area of a square, it is length * length
class Square {
    constructor (length){
        this.length = length;
    }
    area(){
        return this.length * this.length;
    }
}

const newSquare = new Square(3)
console.log(newSquare.area())

// Rectangle -> area L X W

class Rectangle extends Square {
    constructor(length, width){
        super(length);
        this.width = width;
    }
    area(){
        return this.width * this.length;
    }
}

const newRec = new Rectangle(4,5)
console.log(newRec.area())
// class Rectangle {
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }
//     area(){
//         return this.length * this.width;
//     }
// }

// Triangle 0.5*(base*height)
class Triangle extends Rectangle{
    constructor(length, width){
        super(length, width)
    }
    area(){
        return 0.5 * (this.length * this.width);
    }
}
const newTriangle = new Triangle(4,5)
console.log(newTriangle.area())
