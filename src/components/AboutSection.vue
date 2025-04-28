<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <div class="flex">
      <h2>About us</h2>

      <div class="text">
        <span class="emphasize"
          >The Otto Poon Centre for Climate Resilience and Sustainability at HKUST</span
        >
        is strategically positioned to be a pivotal force in the advancement of climate resilience
        and sustainability knowledge and technology.<br />

        The Centre fosters a collaborative environment that bridges internal faculty with leading
        external experts globally.<br />

        Our mission is to catalyse significant advancements not only within Hong Kong but also to
        establish the Centre as a premier global hub for climate action and innovation.<br />

        The Centre is designed to aggregate resources, expertise, and missions focused on climate
        change action, with a particular emphasis on delivering technological solutions that can be
        rapidly implemented to address urgent environmental challenges.<br />

        The Centre will capitalize on the influential role of both the newly established
        <span class="emphasize">WORLD SUSTAINABLE DEVELOPMENT INSTITUTE (WSDI)</span>
        in international climate policy and technology forums and
        <span class="emphasize"
          >DIGITAL METEOROLOGICAL SERVICES AND INNOVATION LAB at HKUST Shanghai Centre</span
        >
        in close collaboration with state agencies and organizations.
      </div>
    </div>

    <div class="grid">
      <div class="item mission">
        <h3>Our mission</h3>
        <div class="explain">
          Establish the Centre as a premier global hub for climate action and innovation.
        </div>
      </div>
      <div class="item about">
        <h3>About</h3>
        <div class="explain">
          A pivotal force in the advancement of climate resilience and sustainability knowledge and
          technology
        </div>
      </div>
      <div class="item collaboration">
        <h3>Collaboration</h3>
        <div class="explain">
          WORLD SUSTAINABLE DEVELOPMENT INSTITUTE and DIGITAL METEOROLOGICAL SERVICES AND INNOVATION
          LAB at HKUST Shanghai Centre
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

h2 {
  font-weight: 700;
  font-size: 36px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #ffffff;
}

.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0;
  color: #ffffff;
}

.emphasize {
  font-weight: 700;
}

.item {
  width: 400px;
  height: 440px;
  border-radius: 16px;
}

.grid {
  display: grid;
  /* grid-row-gap: 30px;
    row-gap: 30px; */
  grid-column-gap: 20px;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: minmax(440px, auto);
}

.mission {
  background-image: url(/images/about/mission.png);
}

.about {
  background-image: url(/images/about/about.png);
}

.collaboration {
  background-image: url(/images/about/collaboration.png);
}

h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0;
  color: #ffffff;
}

.explain {
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0;
  color: #ffffff;
}

.about .explain {
  font-size: 14px;
}

@media (min-width: 1024px) {
  h2 {
    padding-top: 100px;
  }

  .text {
    padding-top: 40px;
    max-width: 1304px;
    text-align: center;
  }

  .grid {
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
  }

  h3 {
    padding-top: 24px;
    padding-left: 24px;
  }

  .explain {
    padding-top: 16px;
    padding-left: 24px;
  }
}
</style>
