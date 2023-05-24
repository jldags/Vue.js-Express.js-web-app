<template>
    <div>
      <h1>Login</h1>
      <v-container style="max-width: 250px;" class="white elevation-4">
        <v-text-field type="email" name="email" placeholder="Email" v-model="email"></v-text-field>
        <v-text-field type="password" name="password" placeholder="Password" v-model="password"></v-text-field>
        <span> <small>Don't have an account? Register <a href="#/register">here</a>.</small></span>
        <button class="btn btn-success" @click="login">Login</button>
      </v-container>
    </div>
  </template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      console.log('Register button clicked: Registration start')
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })

      if (response.status === 200) {
        console.log(`Registration Successful with Email : ${response.data.email}`)
        console.log('Registration stop')
      } else if (response.status === 404) {
        console.log('There is no matching email or password')
      }
    }
  }
}
</script>
