<template>
<Suspense>
  <template #default>
    <p>Data: <pre>{{ data }}</pre></p>
    <nuxt-link to="/">Home</nuxt-link>
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template> 
</Suspense>
</template>

<script setup>
const { data } = await useFetch('https://reqres.in/api/user/3?delay=2', { lazy: true})

</script>
