
console.log('Clint side JS')



const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    message1.textContent = ''

    const address = input.value

    fetch('weather?address=' + address).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.error)
                return message1.textContent = data.error
            else {
                message1.textContent = 'The temperautre at ' + data.location + ' is ' + data.forecast
            }
        })
    })
    //console.log(address)



})