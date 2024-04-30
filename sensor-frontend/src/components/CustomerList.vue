<template>
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
</template>

<script>
import SensorDataService from '../services/SensorDataService'

export default {
    name: 'sensors',
    data() {
        return {
            sensors: []
        }
    },
    methods: {
        retrievesensors() {
            SensorDataService.getAll()
                .then(response => {
                    this.sensors = response.data
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
