const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', (event =>{
    event.preventDefault();
    // console.log(username.value)
    // console.log(form.username.value)
    const username = form.username.value;
    

    if (usernamePattern.test(username)){
        // feedbadck food info
        feedback.textContent = 'that useername is valid'
    } else {
        // feedback help[ info]
        feedback.textContent = 'Username must contain letters only '
    }


}));

//live feedback
form.username.addEventListener('keyup', event => {
    console.log(event)
    //console.log(event.target.value, form.username.value)
    if(usernamePattern.test(event.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }

});



//validation





// testing RegEx

// const username = '@asseribra'
// const pattern = /^[a-z]{6,}$/;

// //let result = pattern.test(username);
// //console.log(result);

// // if (result){
// //     console.log('regex test passed')
// // } else {
// //     console.log('regex failed')
// // }

// let result = username.search(pattern)
// console.log(result)