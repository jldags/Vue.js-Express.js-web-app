<template>
  <div>
    <h1>Register</h1>
    <div class="container white elevation-4" style="max-width: 240px;">
      <input class="form-control" type="email" name="email" placeholder="Email" v-model="email" />
      <br>
      <input class="form-control" type="password" name="password" placeholder="Password" v-model="password" />
      <br>
      <button class="btn btn-primary" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
// import Router from '@/router/index'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        console.log('Register button clicked: Registration start')
        const response = await AuthenticationService.register({
          id: null,
          email: this.email,
          password: this.password
        })

        if (response.status === 200) {
          console.log(`Registration Successful with Email : ${response.data.email}`)
          console.log('Registration stop')

          window.location.href = '#/login'
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
