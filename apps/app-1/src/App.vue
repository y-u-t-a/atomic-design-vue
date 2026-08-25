<script setup lang="ts">
import { ref } from 'vue'
import Button from 'design/atoms/Button.vue'
import PageTemplate from './components/PageTemplate.vue'

const count = ref(0)

function increment() {
  count.value++
}
function reset() {
  count.value = 0
}
function decrement() {
  count.value--
}
</script>

<template>
  <PageTemplate page-name="Counter">
    <div>
      <Button
        primary
        label="Count Down"
        @click="decrement"
      />
      <Button
        primary
        label="Reset"
        @click="reset"
      />
      <Button
        primary
        label="Count Up"
        @click="increment"
      />
      <p>
        count is {{ count }}
      </p>
    </div>
  </PageTemplate>
</template>
