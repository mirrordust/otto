<template>
  <div class="content-container">
    <h3>News</h3>

    <div class="grid">
      <div class="desc">
        <div class="desc-content">
          <div class="date">23rd April 2025</div>
          <div class="title">The First Meeting for the Otto Poon CCRS projects</div>
        </div>
      </div>

      <div class="image">
        <img src="/images/news/first_meeting.png" class="cover" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4e07d8;

  padding-top: 80px;
  padding-left: 100px;
}

.grid {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 150px;
}

.date {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #7f7f7f;

  padding-top: 7px;
  padding-bottom: 16px;
}

.title {
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;

  padding-bottom: 13px;
}

.desc {
  display: flex;
  align-items: center;
  align-self: start;
  justify-self: start;
}

.desc-content {
  position: relative;
  padding-left: 24px;
}

.desc-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 8px;
  background: #4e07d8;
  border-radius: 4px;
  /* z-index: -1; */
}

.image {
  width: min(680px, 100%);
  border-radius: 16px;
  overflow: hidden;
}

.cover {
  width: 100%;
  object-fit: cover;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    justify-items: center;
    align-items: center;
  }
}
</style>
