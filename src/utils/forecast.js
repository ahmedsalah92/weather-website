const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0915b4dccdf972900dafebbef80a3299&query=' + lat + ',' + long;

    request({ url: url, json: true }, (error, {body}) => {

        if (error)
            callback('Unble to connect', undefined)
        else if (body.success === false)
            callback('Location is not correct', undefined)
        else
            callback(undefined,
                {
                    placename : body.location.name,
                    temperature : body.current.temperature,
                    windSpeed: body.current.wind_speed

                })
    })


}

module.exports = forecast