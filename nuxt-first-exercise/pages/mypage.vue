<template>
  <section class="container">
      <h1>{{message}}</h1>
      <hr>
      <router-link to="/">Top Page</router-link>
  </section>
</template>


<script>
export default {
  data: function() {
    return {
      message: 'My page'
    }
  }
}
</script>
