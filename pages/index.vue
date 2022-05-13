<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const query = ref('')

const debounced = refDebounced(query, 1000)
</script>
<template>
  <div>
    <header class="container mx-auto py-4">
      <form class="flex flex-wrap">
        <div class="relative font-normal text-gray-700 w-1/2">
          <input
            type="text"
            class="form-control block w-full px-4 py-2 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Search"
            v-model="query"
          />
          <i class="absolute right-2 top-3 i-carbon-search text-lg" />
        </div>
      </form>
    </header>
    <Suspense>
      <!-- component with nested async dependencies -->
      <CharacterList :query="debounced" />

      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
