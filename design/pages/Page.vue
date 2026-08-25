<script setup lang="ts">
import { ref } from 'vue'
import PageTemplate from '../templates/PageTemplate.vue'
import type { User } from '../types'

const user = ref<User | null>(null)

function onLogin() {
  user.value = { name: 'Jane Doe' }
}

function onLogout() {
  user.value = null
}

function onSignUp() {
  user.value = { name: 'Jane Doe' }
}
</script>

<template>
  <PageTemplate
    site-title="Example"
    :user="user"
    @login="onLogin"
    @logout="onLogout"
    @sign-up="onSignUp"
  >
    <section>
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer"
          >Storybook tutorials</a
        >
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </PageTemplate>
</template>

<style scoped>
section {
  font-family: var(--font-family-base);
  font-size: var(--font-size-md);
  line-height: var(--line-height-base);
  padding: var(--space-10) var(--space-6);
  margin: 0 auto;
  max-width: 600px;
  color: var(--color-text);
}

section h2 {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-none);
  margin: 0 0 var(--space-1);
  display: inline-block;
  vertical-align: top;
}

section p {
  margin: 1em 0;
}

section a {
  text-decoration: none;
  color: var(--color-link);
}

section ul {
  padding-left: var(--space-8);
  margin: 1em 0;
}

section li {
  margin-bottom: var(--space-2);
}

section .tip {
  display: inline-block;
  border-radius: var(--radius-badge);
  font-size: var(--font-size-2xs);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
  background: var(--color-badge-background);
  color: var(--color-badge-text);
  padding: var(--space-1) var(--space-4);
  margin-right: var(--space-3);
  vertical-align: top;
}

section .tip-wrapper {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-snug);
  margin-top: var(--space-9);
  margin-bottom: var(--space-9);
}

section .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: var(--space-1);
  vertical-align: top;
  /* 3px はスケール外の光学調整値のためリテラルで保持する */
  margin-top: 3px;
}

section .tip-wrapper svg path {
  fill: var(--color-accent);
}
</style>
