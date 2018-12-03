import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
// export const store = Vuex.Store({
    state: {
        newTodoText: '',
        todos: [
            {
                title: 'Покосити газон',
                id: 1,
                select: false
            },
            {
                title: 'Вивчити Vue',
                id: 2,
                select: false
            },
            {
                title: 'Покорити Еверест',
                id: 3,
                select: false
            }
        ],
        allSelected: false
    },
    getters: {
        progressLine(state) {
            let onlyDone = state.todos.filter(item => item.select);
            return (onlyDone.length / state.todos.length) * 100;
        },
        onlyDoneTodo(state) {
            return state.todos.filter(item => item.select);
        },
    }
});
