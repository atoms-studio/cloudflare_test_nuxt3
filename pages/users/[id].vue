<template>
  <h1>DATA</h1>
  <pre>{{ data }}</pre>
  <h1>ROUTE</h1>
  <pre>{{ route }}</pre>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://reqres.in/api/user/${route.params.id}?delay=2`
);
</script>
