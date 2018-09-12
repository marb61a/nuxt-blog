<template>
  <div class="admin-auth-page">
    <div class="auth-container">

    </div>
  </div>
</template>

<script>
  import AppControlInput from '@/components/UI/AppControlInput';
  import AppButton from '@/components/UI/AppButton';

  export default {
    name: 'AdminAuthPage',
    layout: 'admin',
    components: {
      AppControlInput,
      AppButton
    },
    data() {
      return {
        isLogin: true
      }
    }
  }
</script>

<style scoped>
  .admin-auth-page {
    padding: 20px;
  }

</style>
