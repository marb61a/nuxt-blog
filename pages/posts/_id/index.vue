<template>
  <div class="single-post-page">
    <section class="post">
      <h1>Post Title</h1>
      <div class="post-details">
        <div>Last Updated on XXX</div>
        <div>Post Written By</div>
      </div>
      <p>
        Post Content
      </p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know your thoughts on the post by sending a mail to
        <a href="mailto:feedback@my-awesome-domain.com">
          feedback@my-awesome-domain.com
        </a>
      </p>
    </section>
  </div>
</template>

<style>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid rgb(243, 238, 238);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
