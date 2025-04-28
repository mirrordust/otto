<script setup lang="ts"></script>

<template>
  <footer class="footer">
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
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
}

ul {
  width: 100%;
  max-width: calc(90% + 24px);
  margin-top: 37px;
  margin-bottom: 58px;
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

.wsdi {
  line-height: 100%;
}

.current_link {
  color: #ffffff;
}
</style>
