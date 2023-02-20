const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();


// Using ASINC / AWAIT
async function generateJoke() {
    const config = {
        headers: {
            "Accept": "application/json",
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    console.log(res);
    const data = await res.json();
    console.log(data);

    jokeEl.innerHTML = data.joke;
    
}


// Using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             "Accept": "application/json",
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke;
//     })
// }

