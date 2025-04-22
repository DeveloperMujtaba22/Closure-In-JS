// JS Variables
// let myname = "Mudassir";
// myname = "Mudassir Arif"
// console.log(myname);
// const g =  9.8;
// const PI = 3.14;
// console.log(age)

// var age = 960;
// age = 1160;
// console.log(age);
// age = 900;

// Hoisting 
// console.log(myname);
// const myname = "Mudassir";


// const name = "Mudassir";
// const name = "Mudassir Arif"
// console.log(name)

// Pass by value or pass by refrence 
// let marks1 = 25;
// let marks2 = marks1;
// marks2 = marks1 + 5;
// console.log(marks1);
// console.log(marks2);

// let obj = {
//     name : "Mudassir",
//     age : 600
// }

// let obj2 = obj;
// obj2.name = "Mudassir Arif"

// console.log(obj)
// console.log(obj2)


function counter(){
    let count = 0;
    
    function increment(){
        count++;
        console.log(count)
    }

    function decrement(){
        count--;
        console.log(count)
    }

    function reset(){
        count = 0;
        console.log(count)
    }

    increment();
    increment();
    decrement();
    reset();   
}

counter()
