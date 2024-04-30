import http from '../http-common'

class SensorDataService {
    getAll() {
        //return http.get('/lectura/getLecturas')
	return http.get('/lectura/getcLecturaList')
    }

    /*
    get(id) {
        return http.get('/sensorlectura/getLecturas/${id}')
    }
    */
     create(data) {
        return http.post('/dsensor', data)
    }

    // update(id, data) {
    //     return http.put(`/sensors/${id}`, data)
    // }

    // delete(id) {
    //     return http.delete(`/sensors/${id}`)
    // }
}

export default new SensorDataService()
