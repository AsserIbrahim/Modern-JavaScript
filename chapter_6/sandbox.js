// // // // // // // const para = document.querySelector("body > h1:nth-child(1)");

// // // // // // // console.log(para);

// // // // // // const paras = document.querySelectorAll("p");
// // // // // // const errors = document.querySelectorAll(".error")


// // // // // // // paras.forEach(para =>{
// // // // // // //     console.log(para)
// // // // // // // })

// // // // // // console.log(errors[0],errors[1]);


// // // // // // get an element by ID

// // // // // // const title = document.getElementById('page-title')
// // // // // // console.log(title)

// // // // // // // get elemts by their class name

// // // // // // const errors = document.getElementsByClassName('error')

// // // // // // get elements by their tag name 

// // // // // // const paras = document.getElementsByTagName("p");
// // // // // // console.log(paras);
// // // // // // console.log(paras[1]);

// // // // // //const para = document.querySelector("p")
// // // // // //console.log(para.innerText);
// // // // // //para.innerText = "ninjas he likes";

// // // // // // const paras = document.querySelectorAll("p")
// // // // // // paras.forEach(element => {
// // // // // //     console.log(element.innerText)
// // // // // //     element.innerText += ' new text';
// // // // // // });

// // // // // // const content = document.querySelector(".content");

// // // // // // // console.log(content.innerHTML);

// // // // // // // content.innerHTML += '<H2> this is a new H2</H2>'

// // // // // // const people = ["mario", "Luigi"];

// // // // // // people.forEach (element => {
// // // // // //     content.innerHTML += `<p>${element}</p>`
// // // // // //     console.log(element)
// // // // // // })

// // // // // const link = document.querySelector("a")

// // // // // console.log(link.getAttribute('href'))
// // // // // link.setAttribute('href', 'https://www.thenetninja.co.uk');
// // // // // link.innerText = "The Net Ninja";

// // // // // const mssg = document.querySelector("p");

// // // // // // console.log(mssg.getAttribute('class'));
// // // // // mssg.setAttribute('class', 'success');
// // // // // //console.log(mssg)
// // // // // mssg.setAttribute('style', 'color: green');

// // // // const title = document.querySelector('h1');

// // // // // title.setAttribute('style', 'margin: 50px;')

// // // // console.log(title.style);
// // // // console.log(title.style.color);

// // // // title.style.margin = '50px';
// // // // title.style.color = 'crimson';

// // // // title.style.fontSize = '60px';
// // // // title.style.margin = '';


// // // const content = document.querySelector('p')

// // // console.log(content.classList)
// // // content.classList.add('error');
// // // content.classList.remove('error');

// // const para = document.querySelectorAll('p');


// // para.forEach(element => {


// //     if (element.innerHTML.includes('error')){
// //         element.classList.add('error')
// //     }
// //     else if(element.innerHTML.includes('success')){
// //         element.classList.add("success")
// //     }
// //     else {
// //         console.log("not either")
// //     }
// // })

// // const title = document.querySelector('.title');
// // title.classList.toggle('test')

// const article = document.querySelector('article')
// // console.log(article.children);

// // Array.from(article.children);
// // console.log(Array.from(article.children));


// // Array.from(article.children).forEach(child =>{
// //     child.classList.add('article-element');
// // })

// const title = document.querySelector('h1')

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// console.log(title.nextElementSibling)
// console.log(title.previousElementSibling)

// // chaining 

// console.log(title.nextElementSibling.parentElement.children);

// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('you clicked me');
// })

// const ul = document.querySelector('ul')
// // ul.remove()


// const button = document.querySelector('button')

// button.addEventListener('click', () =>{
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     //ul.append(li)
//     ul.prepend(li)

//     // ul.innerHTML += '<li>something new</li>';
// })


// const items = document.querySelectorAll('li');


// items.forEach(item => {
//     item.addEventListener('click', (event) => {
//         // console.log('item clicked');
//         // console.log(e)
//         // console.log(event.target)
//         // console.log(item)
//         // if (event.target.style.textDecoration == 'line-through'){
//         //     event.target.style.textDecoration = '';
//         //     return event
//         // }
//         // event.target.style.textDecoration = 'line-through'
//         console.log("event in Li")
//         event.stopPropagation()
//         event.target.remove();

//     });
// });

// ul.addEventListener('click', (e => {
//     // console.log('event in Ul')
//     // console.log(e.target);
//     // e.target.remove()
//     if (e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// }))

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
})