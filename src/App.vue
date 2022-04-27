<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid bg-dark">
    <div class="row">
      <div class="col-2 bg-dark">
        <DatePicker />
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">Made with 💖 by Jack</div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
