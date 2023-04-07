<script setup>
import { ref } from 'vue'
import Button from 'design/atoms/Button.vue'
import PageTemplate from './components/PageTemplate.vue';

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
        :click-handler="decrement"
        :primary="true"
        label="Count Down"
      />
      <Button
        :click-handler="reset"
        :primary="true"
        label="Rest"
      />
      <Button
        :click-handler="increment"
        :primary="true"
        label="Count Up"
      />
      <p>
        count is {{ count }}
      </p>
    </div>
  </PageTemplate>
</template>