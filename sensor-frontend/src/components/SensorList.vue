<!--<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">fecha lectura</th>
                <th scope="col">sensor</th>
                <th scope="col">temperatura</th>
                <th scope="col">fecha alta</th>
                </tr>
            </thead>
            <tbody v-for="(sensor, index) in sensors" :key="index">
                <tr>
                    <td>{{sensor.id_sensor}}</td>
                    <td>{{sensor.fecha_lectura}}</td>
                    <td>{{sensor.sensor}}</td>
                     <td>{{sensor.temperatura}}</td>
                    <td>{{sensor.fecha_alta}}</td>
                    <td><a :href="'/sensors/' + sensor.id" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>-->

<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">sensor</th>
                <th scope="col">temperatura</th>
		<th scope="col">accion</th>
                <th scope="col">latitud</th>
                <th scope="col">longitud</th>
		<th scope="col">heatindex</th>
                <th scope="col">profundidad</th>
                <th scope="col">fechaLectura</th>		
		<th scope="col">timestamp</th>
                <th scope="col">headIndex</th>
                <th scope="col">humedadSuelo</th>
                <th scope="col">lSensor</th>
                </tr>
            </thead>
            <tbody v-for="(lectura, index) in lectura" :key="index">
                <tr>
                    <td>{{lectura.id_sensor}}</td>
                    <td>{{lectura.sensor}}</td>
                    <td>{{lectura.temperatura}}</td>
		    <td>{{lectura.accion}}</td>
                    <td>{{lectura.latitud}}</td>
                    <td>{{lectura.longitud}}</td>
		    <td>{{lectura.heatindex}}</td>
                    <td>{{lectura.profundidad}}</td>
                    <td>{{lectura.fechaLectura}}</td>
		    <td>{{lectura.timestamp}}</td>
                    <td>{{lectura.headIndex}}</td>
                    <td>{{lectura.humedadSuelo}}</td>
		    <td>{{lectura.lSensor}}</td>
                    <td><a :href="'/lectura/' + lectura.id" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import SensorDataService from '../services/SensorDataService'

export default {
    name: 'lectura',
    data() {
        return {
            lectura: []
        }
    },
    methods: {
        retrievesensors() {
            SensorDataService.getAll()
                .then(response => {
                    this.lectura = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.retrievesensors()
    }
}
</script>
