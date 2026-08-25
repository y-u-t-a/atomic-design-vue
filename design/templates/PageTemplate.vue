<script setup lang="ts">
import '../tokens.css'
import Header from '../organisms/Header.vue'
import type { User } from '../types'

defineProps<{
  siteTitle: string
  pageName?: string
  user?: User | null
}>()

defineEmits<{
  login: []
  logout: []
  signUp: []
}>()
</script>

<template>
  <Header
    :title="siteTitle"
    :user="user"
    @login="$emit('login')"
    @logout="$emit('logout')"
    @sign-up="$emit('signUp')"
  />
  <h1 v-if="pageName">{{ pageName }}</h1>
  <slot />
</template>

<style scoped>
h1 {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-none);
  color: var(--color-text);
  margin: var(--space-6);
}
</style>
