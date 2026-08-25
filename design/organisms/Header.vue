<script setup lang="ts">
import Button from '../atoms/Button.vue'
import type { User } from '../types'

defineProps<{
  title: string
  user?: User | null
}>()

defineEmits<{
  login: []
  logout: []
  signUp: []
}>()
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <template v-if="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b>!
          </span>
          <Button
            size="small"
            label="Log out"
            @click="$emit('logout')"
          />
        </template>
        <template v-else>
          <Button
            size="small"
            label="Log in"
            @click="$emit('login')"
          />
          <Button
            primary
            size="small"
            label="Sign up"
            @click="$emit('signUp')"
          />
        </template>
      </div>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  font-family: var(--font-family-base);
  border-bottom: 1px solid var(--color-border);
  /* 15px はスケール外の光学調整値のためリテラルで保持する */
  padding: 15px var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

svg {
  display: inline-block;
  vertical-align: top;
}

h1 {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-none);
  /* 6px はスケール外の光学調整値のためリテラルで保持する */
  margin: 6px 0 6px var(--space-3);
  display: inline-block;
  vertical-align: top;
}

/* Button の root 要素にも当コンポーネントの scope id が付与されるため機能する */
button + button {
  margin-left: var(--space-3);
}

.welcome {
  color: var(--color-text);
  font-size: var(--font-size-md);
  margin-right: var(--space-3);
}
</style>
