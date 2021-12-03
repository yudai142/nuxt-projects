<template>
  <div>

  </div>
</template>

<script>
export default {
  created: function() {
    this.$store.dispach('todos/init')
  }
}
</script>
