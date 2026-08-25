<script setup>
import { computed } from 'vue'
import './button.css'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  backgroundColor: {
    type: String,
  },
})

const classes = computed(() => [
  'storybook-button',
  props.primary ? 'storybook-button--primary' : 'storybook-button--secondary',
  `storybook-button--${props.size}`,
])

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))
</script>

<template>
  <button
    type="button"
    :class="classes"
    :style="style"
  >{{ label }}</button>
</template>
