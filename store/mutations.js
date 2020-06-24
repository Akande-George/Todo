import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default {
    addTodo (state, payload) {
        state.todos.push(payload)
        console.log(payload)
    },
    setTodo(state, payload) {
        state.todos.push(payload)
    }
}