<template>
  <div class="content-container">
    <div class="flex">
      <h2>WSDI Secretariats</h2>
      <div class="contact"><span class="name">Aubrey</span> (aubreyliao@ust.hk)</div>
      <div class="contact"><span class="name">Tu Kexi</span> (tukexintkx@gmail.com)</div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .content-container {
    background: #2c22c8;
  }

  .flex {
    padding: 10px 10px;
  }

  h2 {
    font-weight: 600;
    font-size: 26px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #ffffff;
  }

  .contact {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0;
    color: #ffffff;
  }

  .name {
    font-weight: 500;
  }
}

@media (min-width: 1024px) {
  .content-container {
    background: #2c22c8;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #ffffff;

    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 60px;
  }

  .contact {
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0;
    color: #ffffff;

    padding-left: 40px;
  }

  div.contact:first-of-type {
    padding-left: 80px;
  }

  .name {
    font-weight: 700;
  }
}
</style>
