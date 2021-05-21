const request = require('request')

const geoCode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWhtZWRzYWxhaDkyIiwiYSI6ImNrb2l1azR2ajAwYTIyb2w4eTk2bG02azUifQ.w-nd2RGafoukHu84wDNiCg&limit=1'

    request({ url: url, json: true },
        (error, {body}) => { 
            if(error)
                callback('Unble to connect',undefined)
            else if(body.features.length === 0)
                callback('Location is not correct',undefined)
            else
                callback(undefined,
                    {
                       lat:body.features[0].center[0],
                       lon:body.features[0].center[1],
                       location:body.features[0].place_name

                    })
         })
}

module.exports = geoCode 