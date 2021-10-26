<template>
  <section class="container">
      <h1>{{message}}</h1>
      <hr>
      <router-link to="/mypage">My Page</router-link>
  </section>
</template>


<script>
export default {
  data: function() {
    return {
      message: 'Top page'
    }
  }
}
</script>
