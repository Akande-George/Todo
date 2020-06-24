<template>
  <div id="menu" class="shadow p-1 rounded sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light">
    <nuxt-link class="navbar-brand" to="/"><Logo /></nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" id="menu-container">
      <li class="nav-item" id="list">
        <div id="menu-list-cover">
           <nuxt-link class="nav-link" id="menu-list" to="/dashboard">Dashboard</nuxt-link>
        </div>
      </li>
      <li class="nav-item">
        <div id="menu-list-cover">
           <nuxt-link class="nav-link" id="menu-list" to="/dashboard/todo-list">Todos</nuxt-link>
        </div>
      </li>
      <li class="nav-item" id="list">
        <div id="menu-list-cover">
           <nuxt-link class="nav-link" id="menu-list" to="#">Edit</nuxt-link>
        </div>
      </li>
      <li class="nav-item">
        <div id="menu-list-cover">
           <nuxt-link class="nav-link" id="menu-list" to="#">Profile</nuxt-link>
        </div>
      </li>
      <li class="nav-item">
        <div id="menu-list-cover">
           <nuxt-link class="nav-link" id="menu-list" to="#"><button type="button" @click="signout" class="btn btn-warning">Exit</button></nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

import Logo from './Logo'

export default {
  components: {
    Logo
  },
  methods: {
    signout () {
      firebase.auth().signOut().then(result => {
        console.log(result)
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
  #menu {
    color: white;
  }

  #menu-container {
    margin-left: 40%;
  }

  li {
    margin-left: 7%;
    padding-left: 1%;
    padding-right: 1%;
  }


  li #menu-list-cover #menu-list {
    color: white;
  }

  button {
    background-color: white;
    border: white;
    color: black;
    border-radius: none;
  }

  button:hover {
    background-color: #D26637;
    border: #D26637;
  }

  #login-btn {
    color: 333030;
  }

  li:hover {
    border-bottom: 1px solid #D26637;
  }

</style>
