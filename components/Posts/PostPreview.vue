<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
      >
      </div>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'PostPreview',
    props: {

    }
  }
</script>

<style scoped>
  .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }
</style>
