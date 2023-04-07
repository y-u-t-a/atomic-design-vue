<script setup>
import './button.css'
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  clickHandler: {
    type: Function,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
})

const classes = {
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true
}

const style = {
  backgroundColor: props.backgroundColor
}
</script>

<template>
  <button
    type="button"
    @click="clickHandler"
    :class="classes"
    :style="style"
  >{{ label }}
  </button>
</template>
