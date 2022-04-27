<template>
  <div class="component">
    <p>This is my test page</p>
  </div>
</template>


<script>
import { onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger.js";
export default {
  // NOTE this is my constructor
  setup() {
    onMounted(async () => {
      // NOTE onmounted says do THIS when the page loads
      logger.log("testing");
      //
    });
    return {
      // NOTE this is for functions and returning variables I want to use on this page
    };
  },
};
</script>


<style lang="scss" scoped>
</style>