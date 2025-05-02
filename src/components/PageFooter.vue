<template>
  <footer class="footer">
    <div class="links">
      <ul>
        <li>
          <a href="https://dms-shanghai.hkust.edu.hk">
            Digital Meteorological Services Innovation Lab
            <br />
            at HKUST Shanghai Centre
          </a>
        </li>
        <li>
          <a href="https://ccrs.hkust.edu.hk" class="current_link">
            Otto Poon Centre
            <br />
            for Climate Resilience and Sustainability
          </a>
        </li>
        <li>
          <a href="https://wsdi.hkust.edu.hk" class="wsdi">
            World Sustainable Development Institute
          </a>
        </li>
      </ul>
    </div>

    <div class="secretariats">
      <h3>CCRS Secretariats</h3>
      <div class="contact">Aubrey (aubreyliao@ust.hk)</div>
      <div class="contact">Tu Kexi (tukexintkx@gmail.com)</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wsdi {
  line-height: 100%;
}

.current_link {
  color: #ffffff;
}

.secretariats {
  font-family: 'Poppins';
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 72px;
  padding-top: 36px;
  padding-bottom: 44px;
  color: #ffffff80;
}

h3 {
  font-weight: 600;
  font-size: 16px;
  /* line-height: 100%; */
  letter-spacing: 0;
}

.contact {
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0;
  padding-left: 30px;
}

@media (max-width: 1024px) {
  ul {
    width: 100%;
    max-width: calc(90% + 24px);
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    list-style-position: inside;
    list-style-type: none;
  }

  li {
    padding-top: 20px;
    padding-bottom: 20px;

    /* opacity: 20% -> #33 */
    border-bottom: 1px solid #dddfdd33;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #7f7f7f;
    letter-spacing: 0;
  }
}

@media (min-width: 1024px) {
  ul {
    width: 100%;
    max-width: calc(90% + 24px);
    margin-top: 37px;
    /* margin-bottom: 58px; */
    padding: 0;
    list-style-position: inside;
    list-style-type: none;
  }

  li {
    padding-top: 40px;
    padding-bottom: 40px;

    /* opacity: 20% -> #33 */
    border-bottom: 1px solid #dddfdd33;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    color: #7f7f7f;
    letter-spacing: 0;
  }
}
</style>
