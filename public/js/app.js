console.log('from the js file client side')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#mess1')
const messageTwo = document.querySelector('#mess2')
// const messageOne = document.getElementById('mess1')
// const messageTwo = document.getElementById('mess2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((responce) => {
        responce.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            }
        })
    })
})