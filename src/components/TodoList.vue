<template>
  <v-card class="mt-4" v-show="$store.state.todos.length">
    <v-progress-linear v-model="progress"></v-progress-linear>

    <v-list>
      <v-list-tile v-for="(todo, index) in $store.state.todos" :key="index" :title="todo.title">
        <v-list-tile-action>
          <v-checkbox v-model="todo.select" @change="checkAllSelected"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            {{ todo.title }}
            <button @click="removeElement(index)" style="float: right;">
              <v-icon>delete</v-icon>
            </button>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  methods: {
    // onlyDone() {
    //   return this.$store.state.todos.filter(item => item.select);
    // },
    removeElement(index) {
            this.checkAllSelected();
            this.$store.state.todos.splice(index, 1);
    },
    checkAllSelected() {
        if(this.$store.state.todos.every(item => item.select)) {
            this.$store.state.selectedAll = true
        } else {
            this.$store.state.selectedAll = false
        }
        this.$emit('clickedCheckbox', this.$store.state.selectedAll)
    }
  },
  computed: {
    // progress() {
    //   return (this.onlyDone().length / this.$store.state.todos.length) * 100;
    // }
    progress() {
        return this.$store.getters.progressLine;
    }
  }
};
</script>

<style>
    .v-progress-linear__bar__determinate.primary {
        background-color: #2d8bff !important;
    }
</style>