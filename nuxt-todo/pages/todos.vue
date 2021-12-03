<template>
  <div>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  data: function(){
    return {
      name: '',
      done: false
    }
  },
  created: function() {
    this.$store.dispach('todos/init')
  },
  methods: {
    add(){
      this.$store.dispach('todos/add', this.name)
      this.name = ''
    }
  }
}
</script>
