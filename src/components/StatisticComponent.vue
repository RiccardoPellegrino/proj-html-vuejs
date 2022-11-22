<template>
    <div id="sfondo">
        <div id="icone">
            <div class="coda"><i class="fa fa-user-friends fs-2 text-white"></i>
                <div class="capo"><span class="fs-3 text-buttercup">3195</span> <span class="text-white"> online
                        Learner</span>
                </div>
            </div>
            <div class="coda"><i class="fa fa-play-circle fs-1 text-white"></i>
                <div class="capo"><i class="fa fa-solid fa-clapperboard-play"></i><span
                        class="fs-3 text-buttercup">23</span><span class="text-white"> Video Courses</span>
                </div>
            </div>
            <div class="coda"><i class="fa fa-image fs-1 text-white"></i>
                <div class="capo"><span class="fs-3 text-buttercup">437</span><span class="text-white"> Slider &
                        Images</span></div>
            </div>
            <div class="coda"><i class="fa fa-regular fa-thumbs-up fs-1 text-white"></i>
                <div class="capo"><span class="fs-3 text-buttercup">1440</span><span class="text-white"> Excellent
                        Reviews</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatisticComponent.vue'
}
</script>

<style lang="scss" scoped>
#sfondo {
    background-image: url('public/images/counter-1919x1101.jpg');
    height: 550px;

}

#icone {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.coda {
    display: flex;
    flex-direction: row;
}

.capo {
    display: flex;
    flex-direction: column;
}
</style>