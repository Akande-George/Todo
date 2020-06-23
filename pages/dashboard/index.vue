<template>
  <div id="dashboard">
      <DashboardNav />
      <div id="container" class="mx-5 mt-5 p-3">
          <h3>Welcome, {{ user.email }}</h3>
          <div class="row">
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
          </div>
          <div class="row">
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
              <div class="col-md-4 p-3">
                  <TodoCard />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

import DashboardNav from '~/components/DashboardNav'
import TodoCard from '~/components/TodoCard'

export default {
    components: {
        DashboardNav,
        TodoCard
    },
    data () {
        return {
            user: ''
        }
    },
    mounted () {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user
            if (!this.user) {
                this.$router.push('/')
            }
        })
    }
}
</script>

<style>

</style>
