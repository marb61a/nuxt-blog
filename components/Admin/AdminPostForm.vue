<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">
      Thumbnail Link
    </AppControlInput>
  </form>
</template>

<script>
  import AppControlInput from "@/components/UI/AppControlInput";
  import AppButton from "@/components/UI/AppButton";

  export default {
    components: {
      AppControlInput,
      AppButton
    },
    props: {
      post: {
        type: Object,
        required: false
      }
    }
  }
</script>
