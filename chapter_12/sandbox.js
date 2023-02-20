// // request object

// const getTodos = (resource) => {
    

// return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//             // callback(undefined, data);
//         } else if(request.readyState === 4) {
//             reject('error getting resolved')
//             //callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send()
// });
// };
// //const request = new XMLHttpRequest();

// getTodos('luigi.json').then((data) => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('todos.json');
// }).then((data) => {
//     console.log("promise 2 resolved", data)
// }).catch((error) => {
//     console.log('promise rejected:', error)
// })


// // getTodos((error, data) => {
// //     console.log('call back fired');
// //     if(error){
// //         console.log(error);
// //     }else {
// //         console.log(data)
// //     }
// // const getSomethings = () => {
// //     return new Promise((resolve, reject) => {
// //         //fetch something
// //         resolve('some data');
// //         //reject('some error')
// //     });
// // }





// // getSomethings().then((data) => {
// //     console.log(data)
// // }, (error) => {
// //     console.log(error)
// // }
// // );

// // getSomethings().then((data) => {
// //     console.log(data);
// // }).catch(error => {
// //     console.log(error)
// // })


const getTodos = async () => { // returns a promise

    const response = await fetch('ttodos.json');

    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }


    const data = await response.json();
    return data;
};

getTodos()
.then(data => console.log('resolved:', data))
.catch(error => console.log('rejected:', error.message))

// fetch api IMPORTANT

// fetch('todos.json').then(response => { //only fails for connectivity issues
//     console.log('resolved', response);
//     return response.json(); // returns a promise
// }).then(data => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log('rejected', error);
// }); // this return a promise