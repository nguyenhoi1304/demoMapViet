import axios from 'axios';


function apiCaller(method = 'GET', checkRadio, pointStart, pointEnd) {
    return axios ({
    method: method,
    url: (`https://maps.vietmap.vn/api/route?api-version=YOUR-VERSION&apikey=YOUR-KEY&/${checkRadio}/${pointStart}/${pointEnd}`)
        .catch(err => {
            console.log(err)
        })
    })
}

export default apiCaller;