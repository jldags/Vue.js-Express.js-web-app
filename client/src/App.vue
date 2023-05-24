<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/machine-inventory/index" class="nav-link">Machine Inventory</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->
    <el-menu :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Inventory</el-menu-item>
    </el-menu>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import router from './router/index'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '2':
          const matched = this.$router.currentRoute.fullPath === '/machine-inventory/index'
          if (!matched) router.replace('/machine-inventory/index')
          break
        case '1':
          router.replace('/')
          break
        default:
          router.replace('/')
          break
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
