<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "AppButton",
    props: {
      btnStyle: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .button {
    font: inherit;
    background-color: black;
    color: white;
    padding: 5px;
    cursor: pointer;
    border: 1px solid black;
  }

  .button:hover,
  .button:active {
    background-color: rgb(51, 51, 51);
    border: 1px solid black;
  }

</style>
