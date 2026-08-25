<script setup>
import Header from 'design/organisms/Header.vue'

defineProps({
  pageName: {
    type: String
  }
})

function login() {
  alert('login')
}

function signup() {
  alert('signup')
}
</script>

<template>
  <Header
    title="app-1"
    @login="login"
    @sign-up="signup"
  />
  <h1>{{ pageName }}</h1>
  <slot></slot>
</template>
