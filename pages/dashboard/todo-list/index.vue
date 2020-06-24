<template>
  <div id="todo-list">
      <DashboardNav />
      <div id="todo-container" class="mt-5">
          <h4 class="pl-5 ml-5">TODO LIST</h4>
          <ul>
            <li v-for="todo in todos" :key="todo.id">
                <Todo :month="todo.month" :week="todo.week" :date="todo.date" :active="todo.active" :title="todo.title" />
            </li>
          </ul>
          <div id="add-button">
              <nuxt-link to="/dashboard/todo-list/add-todo" id="link">
                  <button type="button" class="btn btn-warning">Add Todo</button>
              </nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'

import DashboardNav from '~/components/DashboardNav'
import Todo from '~/components/Todo'

export default {
    components: {
        DashboardNav,
        Todo
    },
    computed: {
        todos () {
            return this.$store.state.todos
        }
    },
    mounted () {
        firebase.firestore().collection('todos').get().then((res) => {
            res.forEach(x => {
                this.$store.commit('setTodo', x.data())
            })
        })
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
}

#add-button button {
    width: 17%;
    height: auto;
    margin-left: 70%;
    border: none;
    background-color: #D26637;
    transition: 0.5s;
}

#add-button button:hover {
    opacity: 0.5s;
    transition: 0.5s;
}

#link {
    text-decoration: none;
}

#link:hover {
    text-decoration: none;
}
</style>
