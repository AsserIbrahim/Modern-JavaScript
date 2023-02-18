// //const scores = [10, 30, 15, 25, 50, 40, 5];

// // this method is non distructive (doesnt change the actual array)
// // const filteredScores = scores.filter(() => {
// //     return score > 20;
// // })

// // const users = [
// //     {name: 'shaun', premium: true},
// //     {name: 'yoshi', premium: false},
// //     {name: 'mario', premium: false},
// //     {name: 'chun-li', premium: true}
// //   ];
// // const premiumUsers = users.filter(user => user.premium);
// // console.log(premiumUsers);

// //map method
// //const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// // const salePrices = prices.map(price => price / 2);
// // console.log(salePrices);

// // reduce method

// // const scores = [10, 20, 60, 40, 70, 90, 30];

// // const result = scores.reduce((acc, curr) => {
// //     if(curr > 50){
// //         acc++;
// //     }
// //     return acc; 
// // }, 0);

// // console.log(result)

// // const scores = [10, 20, 60, 40, 70, 90, 30];

// // const firstHighScore = scores.find(score => {
// //     return score > 50
// // });
// // console.log(firstHighScore)

// // example 3 - sorting objects
// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
//   ];

// //   players.sort((a,b) => {
// //     if(a.score > b.score){
// //         return -1;
// //     } else if (b.score > a.score){
// //         return 1;
// //     } else {
// //         return 0;
// //     }
// //   });
// //   console.log(players)

//   players.sort((a,b) => b.score - a.score);

//   console.log(players)

const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

//   const filtered = products.filter(product => product.price > 20)

//   const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
//   });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

  console.log(promos);
