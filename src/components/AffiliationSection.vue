<script setup lang="ts">
</script>

<template>
    <div class="content-container">
        <h2>Affiliation & Contact</h2>

        <div class="grid-container">
            <div class="grid">
                <div class="item image">
                    <img src="/images/affiliation/affilia.png" class="cover" />
                </div>
                <div class="item contact">
                    <div class="depart">
                        The Hong Kong University
                        <br> of Science and Technology
                    </div>
                    <div class="people-background">
                        <div class="people">Prof. Mengqian LU (cemlu@ust.hk)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    color: #FFFFFF;
    text-align: center;
    padding-top: 160px;
    padding-bottom: 49px;
}

.cover {
    width: 100%;
    object-fit: cover;
}

.depart {
    font-weight: 600;
    font-size: 24px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #FFFFFF;
    padding-bottom: 50px;
    /* text-align: center; */
    padding-left: 32px;
}

.people-background {
    background-color: #2C22C8;
    text-align: center;
    border-radius: 32px;
}

.people {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0;
    color: #FFFFFF;
    padding: 12px 32px;
}

@media (min-width: 1024px) {
    .content-container {
        padding: 0 100px;
    }

    .grid-container {
        border-radius: 16px;
        background-image: url(/images/affiliation/affilia-background.png);
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 40px;
        justify-items: center;
        align-items: center;
    }
}
</style>
