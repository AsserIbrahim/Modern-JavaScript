// // // // // function greet(){
// // // // //     console.log("Hello there");
// // // // // }

// // // // // // function expression
// // // // // const speak = function(){  
// // // // //     console.log("Hello there");

// // // // // };

// // // // // greet();
// // // // // speak();


// // // // // argument & parameters

// // // // const speak = function(name){  
// // // //     console.log(`good day ${name}`);
// // // // };

// // // // speak(true);

// // // // returning values 

// // // const calcArea = function(radius){ 
// // //     let area = 3.14 * radius**2
// // //     console.log(`good day ${area}`);
// // //     return area;
// // // };

// // // const area = calcArea(5);
// // // console.log(area)

// // // const calcVolume = function(area){

// // // }

// // // arrow function

// // const calcArea = (radius) => 3.14 * radius**2;

// // const area = (5)
// // console.log("area is:", area);

// // const greet = () => "hello world";

// // console.log("greet is", greet());



// const name = "asser";
// // function 

// const greet = () => "hello";

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase()
// console.log(resultTwo);
// ul is an object.... Create a reference 
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shain', 'chun'];

let html = ``;

people.forEach (person => {
    // htmk template create 
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html