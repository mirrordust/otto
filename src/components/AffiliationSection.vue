<template>
  <div class="content-container">
    <h3>Our Contact</h3>
    <h2>Affiliation</h2>

    <div class="grid">
      <div class="item image">
        <img src="/images/affiliation/affilia.png" class="cover" />
      </div>

      <div class="item contact">
        <div class="line"></div>

        <div class="depart">
          The Hong Kong University
          <br />
          of Science and Technology
        </div>
        <div class="people">Prof. Mengqian LU (cemlu@ust.hk)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  background-color: #1e1e1e;
}

h3 {
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #9965ff;

  padding-top: 80px;
  padding-left: 100px;
}

h2 {
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: 0px;
  color: #ffffff;

  padding-top: 20px;
  padding-left: 100px;
}

.cover {
  width: 100%;
  object-fit: cover;
}

.line {
  border-top: 4px solid #4e07d8;
  width: 80px;
  height: 0;

  /* 对齐下面邮件地址左边 */
  margin-left: 32px;
}

.depart {
  font-weight: 600;
  font-size: 24px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #ffffff;

  padding-top: 40px;
  padding-bottom: 40px;

  /* 对齐下面邮件地址左边 */
  padding-left: 32px;
}

.people {
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0;
  color: #ffffff;
  padding: 12px 32px;
  background-color: #4e07d8;
  border-radius: 32px;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    padding-top: 37px;
    padding-left: 138px;
    padding-right: 135px;
    padding-bottom: 100px;
    justify-items: center;
    align-items: center;
  }
}
</style>
