<template>
    <div class="contenitoreSection bg-white">
        <div id="titolo">
            <h1 class="text-center pt-5">Why my Courses?</h1>
        </div>
        <div class="contenitore">
            <div class="contenitoreInterno">
                <ReasonCardComponent v-for="(miaCarta, index) in store.reasons" :datiInInput="miaCarta" />
            </div>
        </div>
    </div>
</template>

<script>
import ReasonCardComponent from './ReasonCardComponent.vue';
import { store } from './store';


export default {
    name: "ReasonsComponent",
    data() {
        return {
            store
        };
    },
    components: {
        ReasonCardComponent,
    }
}
</script>

<style lang="scss" scoped>
.contenitoreSection {
    width: 100%;
    height: 920px;

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