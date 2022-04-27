// NOTE pages are controllers + constructors + html all in one
<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <Picture :picture="picture" v-if="picture" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { onMounted } from "@vue/runtime-core";
import { picturesService } from "../services/PicturesService.js";
export default {
  name: "Home",
  setup() {
    let query = ref("");
    onMounted(async () => {
      try {
        await picturesService.getPOD();
      } catch (error) {
        Pop.toast(error.message, "error");
        console.error(error);
      }
    });
    return {
      query,
      picture: computed(() => AppState.activePicture),
      async pickDate() {
        try {
          await picturesService.search(query.value);
          query.value = "";
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  max-height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
}
</style>
