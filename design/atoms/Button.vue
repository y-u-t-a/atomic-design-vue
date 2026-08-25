<script setup lang="ts">
import { computed } from 'vue'
import './button.css'

export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
  label: string
  primary?: boolean
  size?: ButtonSize
  backgroundColor?: string
}

const {
  primary = false,
  size = 'medium',
  backgroundColor,
} = defineProps<ButtonProps>()

const classes = computed(() => [
  'storybook-button',
  primary ? 'storybook-button--primary' : 'storybook-button--secondary',
  `storybook-button--${size}`,
])

const style = computed(() => ({
  backgroundColor,
}))
</script>

<template>
  <button
    type="button"
    :class="classes"
    :style="style"
  >{{ label }}</button>
</template>
