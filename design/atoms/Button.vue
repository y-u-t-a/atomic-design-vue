<script setup lang="ts">
import { computed } from 'vue'

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

<style scoped>
.storybook-button {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  border: 0;
  border-radius: var(--radius-pill);
  cursor: pointer;
  display: inline-block;
  line-height: var(--line-height-none);
}

.storybook-button--primary {
  color: var(--color-text-on-accent);
  background-color: var(--color-surface-accent);
}

.storybook-button--secondary {
  color: var(--color-text);
  background-color: transparent;
  box-shadow: var(--color-border-strong) 0 0 0 1px inset;
}

.storybook-button--small {
  font-size: var(--font-size-xs);
  padding: var(--space-3) var(--space-5);
}

.storybook-button--medium {
  font-size: var(--font-size-md);
  /* 11px はスケール外の光学調整値のためリテラルで保持する */
  padding: 11px var(--space-6);
}

.storybook-button--large {
  font-size: var(--font-size-lg);
  padding: var(--space-4) var(--space-7);
}
</style>
