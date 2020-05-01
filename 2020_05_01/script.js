/*//Advanced Arrays
const array =[1, 2, 10, 16];

const double =[];
const newArray = array.forEach(num=>{
    double.push(num=2);
})

console.log('forEach', double);

//map, filter, reduce
//map
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//filter
const filterArray = array.filter(num =>num === 5);
console.log('filter', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log('reduce', reduceArray);

//reference type

var object1= {value: 10};
var object2= object1;
var object3= {value: 10};
//context cs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}
//instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce () {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
};

class Wizard extends Player{
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
        
    }
    play() {
        console.log(`Weeeee I'm a ${this.type}`)
    }
}
const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Dark Magic');
*/
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep:'try and copy me'
    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep="hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);