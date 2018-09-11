<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')"
    >
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheSidenav",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .sidenav-container {
    height: 100%;
    width: 100%;
  }

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }

</style>
