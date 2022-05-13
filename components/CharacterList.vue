<script setup lang="ts">
const props = defineProps({
  query: String,
})
const { data: characters, refresh } = await useFetch(
  () => `/api/characters?q=${props.query}`,
)

const formattedCharacters = computed(() =>
  characters.value.map(character => ({
    ...character,
    path: `/${character.name.toLowerCase()}`,
  })),
)
</script>
<template>
  <div class="grid grid-cols-4 gap-8 container mx-auto py-8">
    <NuxtLink
      v-for="{ name, images, series, path } of formattedCharacters"
      :to="path"
    >
      <AsCard :key="name" class="relative overflow-hidden">
        <template #header>
          <header>
            <AsImg :src="images.portrait" :aspect-ratio="'1/1'" />
            <h2 class="font-display p-4 flex items-center">
              {{ name }} <img class="w-4 h-4 ml-4" :src="images.icon" alt="" />
            </h2>
          </header>
        </template>
        <template #content>
          <img
            class="w-8 h-8 absolute bottom-2 right-2 opacity-20 rotate-3"
            :src="series.icon"
            alt=""
          />
        </template>
      </AsCard>
    </NuxtLink>
  </div>
</template>
