<template>
    <div class="contenitoreSection bg-white">
        <div id="titolo">
            <h1 class="text-center pt-5">Why my Courses?</h1>
        </div>
        <div class="contenitore">
            <div class="contenitoreInterno">
                <ReasonCardComponent />
                <ReasonCardComponent />
                <ReasonCardComponent />
                <ReasonCardComponent />
            </div>
        </div>
    </div>
</template>

<script>
import ReasonCardComponent from './ReasonCardComponent.vue';

export default {
    name: "ReasonsComponent",
    components: {
        ReasonCardComponent
    }
}
</script>

<style lang="scss" scoped>
.contenitoreSection {
    width: 100%;
    height: 850px;

}

.contenitore {
    width: 70%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
}

.contenitoreInterno {
    display: flex;
    flex-wrap: wrap;
}
</style>