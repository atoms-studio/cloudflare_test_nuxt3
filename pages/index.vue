<template>
  <div>
    <p>Data: <pre>{{ data }}</pre></p>
  </div>
  <nuxt-link to="/user">User</nuxt-link>
</template>

<script setup>
const { data } = await useAsyncData('data', () => $fetch('https://reqres.in/api/unknown/3?delay=2'), { lazy: true})
</script>
