<template>
  <form @submit.prevent="findPictures" class="bg-light rounded">
    <div class="form-group d-flex flex-column">
      <input class="form-control" type="date" name="date" id="date" />
      <button type="submit" class="btn btn-primary">Search</button>
    </div>
  </form>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>