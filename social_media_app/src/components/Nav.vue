<template>
  <nav>
    <div class="logo">
      <router-link :to="{ name: 'home' }">Instasam</router-link>
    </div>
    <ul>
      <li>
        <button
          @click="navOptions.toggleAccountOptions"
          id="profile-icon"
          class="material-symbols-outlined"
        >
          account_circle

          <span
            class="material-symbols-outlined"
            :class="{ reverse: navOptions.showAccountOptions }"
          >
            expand_more
          </span>
        </button>
        <div id="profile-options" v-show="navOptions.showAccountOptions">
          <ul>
            <li><router-link :to="{ name: 'signIn' }">Sign in</router-link></li>
            <li><router-link :to="{ name: 'signUp' }">Sign up</router-link></li>
          </ul>
        </div>
      </li>
      <li><router-link :to="{ name: 'postMenu' }">Post Menu</router-link></li>
      <li><router-link :to="{ name: 'chatMenu' }">Chat Menu</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { createRouter } from "vue-router";

import type { Ref } from "vue";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { navigatinoStore } from "@/stores/navigationStore";

const navOptions = navigatinoStore();
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  background-color: var(--foreground);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  border-bottom: 2px solid var(--background);
  .logo {
    font-size: 2rem;
  }

  ul {
    align-items: center;
    display: flex;

    gap: 30px;
    justify-content: center;
    list-style: none;

    :first-child {
      position: relative;
    }
    li a {
      cursor: pointer;
    }
  }
  #profile-icon {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: flex-end;
    font-size: 2.4rem;
  }
  #profile-options {
    bottom: -225%;
    left: 0%;
    width: 150%;
    border: 1px solid var(--background);
    background: var(--foreground);
    border-radius: 1.5vmin;

    position: absolute;

    ul {
      gap: 0;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 0.33rem;

      li {
        margin: 0.2rem;
      }
    }
  }

  .reverse {
    transform: rotate(180deg);
  }

  button {
    background-color: transparent;
    border: none;
  }
}
</style>
