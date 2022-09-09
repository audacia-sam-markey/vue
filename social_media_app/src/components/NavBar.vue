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
            <li v-if="!userStore.isUserLoggedIn">
              <router-link :to="{ name: 'signIn' }">Sign in</router-link>
            </li>
            <li v-if="!userStore.isUserLoggedIn">
              <router-link :to="{ name: 'signUp' }">Sign up</router-link>
            </li>
            <li @click="userStore.toggleisUserLoggedIn" v-else>
              <router-link :to="{ name: 'home' }">Sign Out</router-link>
            </li>
            <li v-if="userStore.isUserLoggedIn">
              <router-link :to="{ name: 'accountHome' }"
                >Account Home</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li><router-link :to="{ name: 'postMenu' }">Post Menu</router-link></li>
      <li><router-link :to="{ name: 'chatMenu' }">Chat Menu</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navigatinoStore } from "@/stores/navigation.store";
import { UserStore } from "@/stores/user.store";

const navOptions = navigatinoStore();
const userStore = UserStore();
</script>

<style lang="scss">
nav {
  position: sticky;
  background-color: $foreground;
  padding: 1rem 10rem;

  @include flexTemp(row, center, space-between);

  font-size: 1.4rem;
  border-bottom: 2px solid $gray;
  .logo {
    font-size: 2rem;
  }

  ul {
    @include flexTemp(row, center, center);

    gap: 30px;

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
    @include flexTemp(row, flex-end, center);

    font-size: 2.4rem;
  }
  #profile-options {
    z-index: 200;
    bottom: -300%;
    left: 0%;
    width: 25vmin;
    border: 1px solid $background;
    background: $foreground;
    border-radius: $rounded;

    position: absolute;

    ul {
      gap: 0;
      @include flexTemp(column, center, "");
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
