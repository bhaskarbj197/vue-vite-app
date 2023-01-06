<script setup>
import { RouterLink } from 'vue-router';

import AuthService from '../services/AuthServices';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!--<a class="navbar-brand">Navbar</a>-->
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-sm btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <!--<RouterLink to="/" class="nav-item nav-link">Home</RouterLink>-->
      <p>&nbsp;&nbsp;</p>
      <button @click="AuthService.logout()" class="nav-link">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding-left: 64px;
  transition: 0.2s ease-in-out;
  justify-content: right;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container-fluid {
  justify-content: right;
}
</style>
