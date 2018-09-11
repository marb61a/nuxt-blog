<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle
        @toggle="$emit('sidenavToggle')"
      />
    </header>
    <div class="logo">
      <nuxt-link to="/">NUXT BLOG</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

  export default {
    name: "TheHeader",
    components: {
      TheSideNavToggle
    }
  }
</script>

<style scoped>
  .header-container {
    height: 60px;
  }

  .the-header {
    width: 100%;
    position: fixed;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
  }
</style>
