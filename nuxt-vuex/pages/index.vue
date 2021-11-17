<template>
  <section class="container">
    <div>
      <!-- <p>{{$store.state.message}}</p> -->
      <p>{{$store.state.hello.message}}</p>
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction', 'Dispach with payload')">Dispatch</button> -->
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispach with payload')">Dispatch</button>
    </div>
  </section>
</template>

<script>

export default {
}
</script>
