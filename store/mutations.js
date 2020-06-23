export default {
    addTodo (state, payload) {
        state.todos.push(payload)
        console.log(payload)
    }
}