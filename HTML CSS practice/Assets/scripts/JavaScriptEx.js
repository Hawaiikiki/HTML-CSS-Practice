// 1.
let salaries = {John: 100,Ann: 160,Pete: 130}
var Sum = salaries.John+salaries.Ann+salaries.Pete;
console.log(Sum);

// 2.
let menu = {width: 200,height: 300,title: "My menu"};

function multiplyNumeric(obj){
    for(el in obj){
        if(typeof obj[el] == 'number'){
            obj[el]=obj[el]*2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

// 3. (although my email contains '.' before '@' ...)
function checkEmailId(str){
    str = str.toLowerCase();
    if(!str.includes("@")){
        return false;
    }
    else{
        let i = str.indexOf("@");
        if(!str.includes(".",i+2)){
            return false;
        }
    }
    return true;
}
console.log(checkEmailId("sean.suh@gmail.com")); //true
console.log(checkEmailId("sean.suhgmail.com")); //false
console.log(checkEmailId("sean.suh@.com")); //false

// 4.
function truncate(str,maxlength){
    let res = str.slice(0,maxlength);
    if (res!=str){
        res = res+"...";
    }
    return res;
}
console.log(truncate("What I'd like to tell on this topic is: ",20));
console.log(truncate("Hi everyone!",20));

// 5.
const personArray = ["James","Brennie"];
console.log(personArray);
personArray.push("Robert")
console.log(personArray);
personArray[Math.floor(personArray.length/2)]="Calvin";
console.log(personArray);
personArray.shift();
console.log(personArray);
personArray.unshift("Rose","Regal");
console.log(personArray);