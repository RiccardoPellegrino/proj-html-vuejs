<template>
    <div class="mycontainer bg-blackhaze">
        <div>
            <h1 class="text-center py-5">New Courses</h1>
        </div>
        <div id="card-container">
            <CourseCardComponent v-for="(miaCarta, index) in store.corsi" :datiInInput="miaCarta" />

        </div>
        <div id="containerLoadMore">
            <button id="bottoneLoadMore" class="text-white bg-buttercup no-bordo rounded-5">LOAD MORE</button>
        </div>
    </div>

</template>

<script>
import CourseCardComponent from './CourseCardComponent.vue';
import { store } from './store';
export default {
    name: 'CoursesComponent',
    data() {
        return {
            store
        };
    },
    components: {
        CourseCardComponent
    }

}
</script>

<style lang="scss" scoped>
.mycontainer {
    width: 100%;
    padding-bottom: 60px;
}

#card-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#containerLoadMore {
    text-align: center;
    width: 10%;
    margin: 30px auto;
}

#bottoneLoadMore {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>