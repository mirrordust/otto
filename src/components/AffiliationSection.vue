<template>
  <div class="content-container">
    <h3>Our Contact</h3>
    <h2>Affiliation</h2>

    <div class="grid">
      <div class="item">
        <img src="/images/affiliation/affilia.png" class="cover" />
      </div>

      <div class="item">
        <div class="contact">
          <div class="position">Director of CCRS</div>
          <div class="persons">
            <div class="person">Prof. Mengqian LU (cemlu@ust.hk)</div>
          </div>
        </div>
        <div class="contact">
          <div class="position">Managing Secretariat of CCRS</div>
          <div class="persons">
            <div class="person">Mr. Aubrey Liao (aubreyliao@ust.hk)</div>
            <div class="person">Kexin Tu (tukexinkx@ust.hk)</div>
          </div>
        </div>
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

.contact {
  padding-top: 80px;
}

.contact:first-child {
  padding-top: 24px;

  position: relative;
}

.contact:first-child::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 4px;
  width: 80px;
  background: #4e07d8;
}

.position {
  font-weight: 400;
  font-size: 16px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #ffffff;
}

.person {
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0%;
  color: #ffffff;

  padding-top: 10px;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    padding-top: 37px;
    padding-left: 138px;
    padding-right: 135px;
    padding-bottom: 100px;
    justify-items: center;
    align-items: start;
  }
}
</style>
