<template>
  <div id="register">
      <div class="card align-middle mt-3 col-md-6 pt-2" id="form-container">
          <form @submit.prevent="onSubmit">
              <div id="logo" class="mt-3">
                  <Logo />
              </div>
              <h4 class="mt-2">Register</h4>
              <div id="form-info">
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="text" class="form-control" v-model="name" id="exampleFormControlInput1" placeholder="Full Name">
                </div>
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="email" class="form-control" v-model="email" id="exampleFormControlInput1" placeholder="Email">
                </div>
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="password" class="form-control" v-model="password" id="exampleFormControlInput1" placeholder="password">
                </div>
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="password" class="form-control" v-model="password" id="exampleFormControlInput1" placeholder="Confirm Password">
                </div>
                <div id="button">
                    <button type="submit" class="btn btn-warning w-75 p-3">Login</button>
                </div>
                <p>Have an account <nuxt-link id="link" to="/login">Login</nuxt-link></p>
                <p>Go back <nuxt-link id="link" to="/">Home</nuxt-link></p>
              </div>
          </form>
      </div>
  </div>
</template>

<script scoped>
import * as firebase from 'firebase/app'
import 'firebase/auth'

import Logo from '@/components/Logo'

export default {
    components: {
        Logo
    },
    data () {
        return {
            name: '',
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        onSubmit () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
                console.log(user)
                this.$router.push('/dashboard')
            }).catch(error => {
                this.error = error
            })
        }
    }
}
</script>

<style scoped>
#register{
    width: 100%;
}

#logo {
    text-align: center;
}

form h4 {
    text-align: center;
}

#form-container {
    border: 1px solid #D26637;
    margin: 0 auto;
    background-color: transparent;
    padding-bottom: 2%;
}

#form-info {
    padding-top: 2%;
}

#inputs {
    margin: 0 auto;
    padding-top: 3%;
}

#inputs input {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: #D26637 1px solid;
    color: white;
}

#inputs input:focus {
    border: none;
    border-bottom: #D26637 1px solid;
}

::placeholder {
    color: white;
    opacity: 1;
}

#button {
    text-align: center;
}

#button button {
    background-color: #D26637;
    color: black;
    border: #D26637;
    transition: 0.7s;
}

#button button:hover {
    opacity: 0.5;
    transition: 0.7s;
}

form p {
    text-align: center;
    margin-top: 3%;
}

form p #link {
    color: #D26637;
    transition: 0.5s;
}

form p #link:hover {
    border-bottom: #D26637 1px solid;
    transition: 0.5s;
}
</style>
