<template>
  <v-card class="mt-3">
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox
            color="primary"
            v-if="$store.state.todos.length > 0"
            v-model="$store.state.allSelected"
            @change="selectAll"
          ></v-checkbox>
          <v-icon color="primary" v-else>check</v-icon>
        </v-list-tile-action>
        <v-text-field
          clearable
          color="primary"
          flat
          hide-details
          maxlength="1023"
          placeholder="Що вам потрібно зробити?"
          solo
          id="new-todo"
          v-model="$store.state.newTodoText"
          @keyup.enter="addNewTodo"
        ></v-text-field>
        <v-btn color="success" @click="addNewTodo">Add</v-btn>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    addNewTodo() {
      this.$store.state.todos.push({
        id: this.$store.state.todos.length + 1,
        title: this.$store.state.newTodoText
      });
      this.$store.state.newTodoText = "";
    },
    selectAll() {
      this.$store.state.todos.forEach((item, index) => {
        item.select = this.$store.state.allSelected;
        this.$set(this.$store.state.todos, index, item);
      });
    }
  }
};
</script>