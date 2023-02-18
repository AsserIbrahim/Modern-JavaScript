// Asser Ibrahim

const correctAnswers = ['D', 'B', 'D', 'B', 'E'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;   
        }
    });
    result.classList.remove('d-none')
    let span = result.querySelector("span");
    span.textContent = `${score}%`

    // show result on page
    scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {
        span.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
}); 