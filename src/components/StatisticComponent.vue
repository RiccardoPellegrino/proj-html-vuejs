<template>
    <div id="sfondo" class="parallax">

        <div id="contenitoreInterno">

            <div class="contenitoreStatistiche">
                <div class="coda"><i class="fa fa-user-friends text-white"></i></div>
                <div class="capo">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount=3915 :duration='10' prefix='' suffix=''
                        separator='' decimalSeparator='.' :autoinit='true' /> <span class="
                        text-white"> online Learner</span>
                </div>
            </div>

            <div class="contenitoreStatistiche">
                <div class="coda"><i class="fa fa-play-circle text-white"></i></div>
                <div class="capo"><i class="fa fa-solid fa-clapperboard-play"></i>
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount=25 :duration='10' prefix='' suffix=''
                        separator='' decimalSeparator='.' :autoinit='true' /> <span class="text-white"> Video Courses
                    </span>
                </div>
            </div>

            <div class="contenitoreStatistiche">
                <div class="coda"><i class="fa fa-image text-white"></i></div>
                <div class="capo">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount=437 :duration='10' prefix='' suffix=''
                        separator='' decimalSeparator='.' :autoinit='true' /> <span class="text-white"> Slider &
                        Images</span>
                </div>
            </div>

            <div class="contenitoreStatistiche">
                <div class="coda"><i class="fa fa-regular fa-thumbs-up text-white"></i></div>
                <div class="capo">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount=1490 :duration='10' prefix='' suffix=''
                        separator='' decimalSeparator='.' :autoinit='true' /> <span class="text-white"> Excellent
                        Reviews</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';
export default {
    name: 'StatisticComponent.vue',
    components: {
        'vue3-autocounter': Vue3autocounter
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#sfondo {
    background-image: url('public/images/counter-1919x1101.jpg');
    height: 550px;


}

.parallax {
    /* The image used */
    background-image: url("public/images/counter-1919x1101.jpg");

    /* Full height */
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#contenitoreInterno {
    width: 70%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.contenitoreStatistiche {
    display: flex;
    align-items: center;
}

.coda {
    display: flex;
    flex-direction: row;
}

.capo {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    color: $buttercup;
    font-size: 25px;
}

i {
    font-size: 50px;
}
</style>