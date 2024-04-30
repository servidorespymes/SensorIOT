<template>
    <div>
        <div v-if="!submitted">
            <div class="mb-3">
                <label for="nameSensor" class="form-label">nameSensor</label>
                <input type="text" class="form-control" id="nameSensor" required name="nameSensor" v-model="sensor.nameSensor">
            </div>
            <div class="mb-3">
                <label for="deviceType" class="form-label">deviceType</label>
                <input type="text" class="form-control" id="deviceType" required name="deviceType" v-model="sensor.deviceType">
            </div>
            <div class="mb-3">
                <label for="deviceId" class="form-label">deviceId</label>
                <input type="email" class="form-control" id="deviceId" required name="deviceId" v-model="sensor.deviceId">
            </div>
            <div class="mb-3">
                <label for="Fecha_alta" class="form-label">Fecha_alta</label>
                <input type="text" class="form-control" id="Fecha_alta" required name="Fecha_alta" v-model="sensor.Fecha_alta">
            </div>
            <div class="mb-3">
                <button @click="savesensor" class="btn btn-primary">Submit</button>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-success" role="alert">
                Save sensor successfully!
            </div>
            <button @click="newsensor" class="btn btn-primary">Add New sensor</button>
        </div>
    </div>
</template>

<script>

import SensorDataService from '../services/SensorDataService'

export default {
    name: 'add-sensor',
    data() {
        return {
            sensor: {
                id: null,
                nameSensor: "",
                deviceType: "",
                deviceId: "",
                Fecha_alta: ""
            },
            submitted: false
        }
    },
    methods: {
        savesensor() {
            var data = {
                nameSensor: this.sensor.nameSensor,
                deviceType: this.sensor.deviceType,
                deviceId: this.sensor.deviceId,
		Fecha_alta: this.sensor.Fecha_alta
            }
            SensorDataService.create(data)
                .then(response => {
                    this.sensor.id = response.data.id
                    this.submitted = true;
                })
                .catch( e => {
                    alert(e)
                })
        },
        newsensor() {
            this.submitted = false
            this.sensor = {}
        }
    }
}
</script>
