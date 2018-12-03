<template>
  <v-app>
    <v-container>
      <todo-header></todo-header>
      
          <v-layout align-center row>
            <v-flex md6 offset-md3 text-md-center mt-3>

                <todo-create></todo-create>
                <todo-list
                  @clickedCheckbox="changeAllSelect"
                ></todo-list>
              
            </v-flex>
          </v-layout>

      <todo-footer></todo-footer>
    </v-container>
  </v-app>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoCreate,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: null
    }
  },
  methods: {
    changeAllSelect(value) {
      this.$store.state.allSelected = value
    }
  }
}
</script>
