<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">sensor Manager</router-link>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link to="/lectura" class="nav-link">sensor List</router-link>
            <router-link to="/add" class="nav-link">Add New sensor</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
