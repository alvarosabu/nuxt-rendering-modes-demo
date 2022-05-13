<script setup lang="ts">
const route = useRoute()

const { data: character } = await useFetch(
  () => `/api/characters?q=${route.params.name?.toLowerCase()}`,
)

const single = computed(() => character.value[0])

onMounted(() => {
  console.log(single.value)
})
</script>
<template>
  <div class="container mx-auto grid grid-cols-2 gap-8 p-4" v-if="single">
    <AsImg :src="single.images.portrait" :aspect-ratio="'1/1'" />
    <div class="border-gray-300 border-1 rounded-lg p-4">
      <h2 class="font-display p-4 text-2xl flex items-center">
        {{ single.name }}
        <img class="w-8 h-8 ml-4" :src="single.images.icon" alt="" />
      </h2>
      <ul class="flex">
        <li></li>
      </ul>
      <footer><AsButton link="/" target="_self">Go Back</AsButton></footer>
    </div>
  </div>
</template>
