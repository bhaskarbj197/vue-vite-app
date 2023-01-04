<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="vue" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons"> keyboard_double_arrow_right</span>
      </button>
    </div>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/">
        <span class="material-icons">group</span>
        <span class="text">Team</span>
      </router-link>
      <router-link class="button" to="/">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  background: var(--dark);
  color: var(--light);
  padding: 1rem;
  overflow: hidden;

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }
    }
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        background-color: var(--dark);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
