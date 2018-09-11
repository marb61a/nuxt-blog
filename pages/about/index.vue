<template>
  <div class="about-page">
    <h1>This is the about page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sed auctor purus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sed auctor purus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sed auctor purus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sed auctor purus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sed auctor purus.
    </p>
  </div>
</template>

<style scoped>
  .about-page {
    text-align: center;
    padding: 30px;
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

</style>
