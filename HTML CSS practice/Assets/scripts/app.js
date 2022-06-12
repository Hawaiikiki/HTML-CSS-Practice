function resetForm(){
    document.getElementById("fName").value="";
    document.getElementById("lName").value="";
}
function validateForm(){
    let x = document.forms["myForm"]["Email"].value;
    let y = document.forms["myForm"]["Password"].value;
    if(x==""){
        alert("Email field must be filled out to continue");
        return false;
    }
    if(y==""){
        alert("Password field must be filled out to continue");
        return false;
    }
}
const myBtn = document.getElementById("bgColor");
// don't have too many eventListener but they are similar to java
myBtn.addEventListener("click",()=>{
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor = "Green";
    }
    else{
        document.body.style.backgroundColor = "White";
    }
    
})
// object literals
var Person = {firstName: "Sean", lastName:"Suh",Age:27,location:"Los Angeles"};
console.log(Person);

//function constructor
function Human(first,last,Age,loc = "the Default"){ // we can have default parameter
    this.firstName = first; // this keyword is important
    this.lastName = last;
    this.Age = Age;
    this.location = loc;
}
// parameters are optional
const Angela = new Human("Angela","Koo",25,"Los Angeles");
console.log(Angela);

// Object.create()

const newAngela = Object.create(Angela);
newAngela.location="Chicago";
newAngela.Age=26;
console.log(newAngela);

// classes
class Car{
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
}
const newCar = new Car("BMW","5 Series");
console.log(newCar);
Coco = new Car("Audi","A7");
console.log(Coco);

// Inheritance
class Engine extends Car{
    constructor(Make,Model,Engine){
        super(Make,Model);
        this.Engine = Engine;
    }
}

const specificCar = new Engine("Benz","S Series","V6");
console.log(specificCar);

// Javascript assignment
let salaries ={ // object
    John: 100, // properties of object
    Ann: 160,
    Pete: 130
}
var Sum = salaries.John+salaries.Ann+salaries.Pete;
console.log(Sum);

var Sum2 = 0;
function sumSalaries(obj){
    for(el in obj){
        if(typeof obj[el] == 'number'){
            Sum2+=obj[el];
        }
    }
}
sumSalaries(salaries);
console.log(Sum2);


var Sum3 = 0;
for(el in salaries){
    Sum3 +=salaries[el];
}
console.log(Sum3);
// Array operations

const salariesArray = [100,160,130]; // const in javascript is different from const in other language
// const allows us to modify the value of array, but cannot change the reference
// it's always referencing the same array but its elements can be modified

salariesArray[1]=200; // modify value at index 1
console.log(salariesArray);
salariesArray.push(500);
console.log(salariesArray);
salariesArray.pop();
console.log(salariesArray);
salariesArray.shift(); // remove element in the beginning
console.log(salariesArray); 
salariesArray.push(50,20,30,40,1000,400,20); // can push multiple elements at once
console.log(salariesArray);
salariesArray.splice(2,3);// will remove 3 elements starting from index 2
console.log(salariesArray);
function spliceArrayByValue(arr,val){
    for(var i =0; i<arr.length;i++){
        if(arr[i]==val){
            arr.splice(i,1);
            //break; if we want to only get rid of first occurence
        }
    }
}
spliceArrayByValue(salariesArray,40);
console.log(salariesArray);
