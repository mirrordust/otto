<script setup lang="ts">
</script>

<template>
    <div class="content-container">
        <h2>News</h2>

        <div class="grid">
            <div class="desc">
                <div class="desc-border"></div>
                <div class="desc-content">
                    <div class="date">
                        23rd April 2025
                    </div>
                    <div class="title">
                        The First Meeting for the Otto Poon CCRS projects
                    </div>
                </div>
            </div>

            <div class="image">
                <img src="/images/news/first_meeting.png" class="cover" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-container {
    padding: 0 100px;
}

h2 {
    font-weight: 500;
    font-size: 32px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #FFFFFF;
    text-align: center;
    padding-top: 123px;
    padding-bottom: 96px;
}

.grid {
    padding-bottom: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

.date {
    font-weight: 400;
    font-size: 20px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #FFFFFF;
    padding-top: 13px;
    padding-bottom: 12px;
}

.title {
    font-weight: 600;
    font-size: 24px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #FFFFFF;
    padding-bottom: 13px;
}

.desc {
    display: flex;
    align-items: center;
    align-self: start;
    justify-self: start;
}

.desc-border {
    border-left: 8px solid #2C22C8;
    width: 0;
    height: 140px;
    border-radius: 4px;
}

.desc-content {
    padding-left: 24px;
}

.image {
    width: 680px;
    border-radius: 16px;
    overflow: hidden;
}

.cover {
    width: 100%;
    object-fit: cover;
}

@media (min-width: 1024px) {}
</style>
