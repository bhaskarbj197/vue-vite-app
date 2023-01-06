<script setup>
import { RouterLink } from 'vue-router';

import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

import AuthService from './services/AuthServices';
</script>

<template>
  <!--<nav
    class="navbar navbar-expand navbar-light bg-light"
    v-if="!$route.meta.hideSidebar"
  >
    <div class="navbar-nav">
      <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
      <button @click="AuthService.logout()" class="nav-item nav-link">
        Logout
      </button>
    </div>
  </nav>-->
  <Header v-if="!$route.meta.hideSidebar" />
  <div class="app">
    <Sidebar v-if="!$route.meta.hideSidebar" />
    <!--<Header />-->

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
:root {
  --primary: #526778;
  --dark: #1e293b;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fire sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
