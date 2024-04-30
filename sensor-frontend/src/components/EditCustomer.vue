<template>
    <div v-if="currentsensor">
        <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" required name="firstName" v-model="currentsensor.firstName">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" required name="lastName" v-model="currentsensor.lastName">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required name="email" v-model="currentsensor.email">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" required name="phone" v-model="currentsensor.phone">
            </div>
            <div class="mb-3">
                <button @click="updatesensor" class="btn btn-primary me-3">Update</button>
                <button @click="deletesensor" class="btn btn-danger">Delete</button>
            </div>
             <div class="alert alert-success" role="alert" v-if="message">
                {{message}}
            </div>
    </div>
</template>

<script>
import SensorDataService from '../services/SensorDataService'

export default {
    name: 'edit-sensor',
    data() {
        return {
            currentsensor: null,
            message: ''
        }
    },
    methods: {
        getsensor(id) {
            SensorDataService.get(id)
                .then(response => {
                    this.currentsensor = response.data
                })
                .catch(e => {
                    alert(e)
                })
        },
        updatesensor() {
            SensorDataService.update(this.currentsensor.id, this.currentsensor)
                .then(() => {
                    this.message = 'The sensor was updated successfully!'
                })
                .catch(e => {
                    alert(e)
                })
        },
        deletesensor() {
            SensorDataService.delete(this.currentsensor.id)
                .then(() => {
                    this.$router.push({name: 'sensors'})
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.getsensor(this.$route.params.id)
    }
}
</script>
