<template>
  <img :src="picture.imgUrl" class="img-fit selectable" alt="" />
</template>


<script>
import { reactive } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
export default {
  props: {
    picture: { type: Picture, required: true },
  },
  setup() {
    // let activePicture = reactive(AppState.activePicture);
    // console.log(activePicture);
    return {
      // activePicture,
    };
  },
};
</script>


<style lang="scss" scoped>
.img-fit {
  object-fit: cover;
  height: 80vh;
}
</style>