<template>
  <div id="todo-list">
      <DashboardNav />
      <div id="todo-container" class="mt-5">
          <h4 class="pl-5 ml-5">TODO LIST</h4>
          <ul>
            <li v-for="todo in todos" :key="todo.id">
                <Todo :month="todo.month" :day="todo.day" :active="todo.active" :title="todo.title" />
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
import DashboardNav from '~/components/DashboardNav'
import Todo from '~/components/Todo'

export default {
    components: {
        DashboardNav,
        Todo
    },
    data () {
        return {
            todos : [
                {
                    id: 1,
                    month: 'January',
                    day: 'Wednesday',
                    active: 'blue',
                    title: "FINISH UP DAD'S WEBSITE"
                },
                {
                    id: 2,
                    month: 'March',
                    day: 'Monday',
                    active: 'green',
                    title: 'PRAY FOR NIGERIA'
                },
                {
                    id: 3,
                    month: 'December',
                    day: 'Sunday',
                    active: 'purple',
                    title: 'CALL YOUR BOSS'
                }
            ]
        }
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
