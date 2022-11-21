<template>
    <div class="jumbotron">
        <div class="frase ">
            <h1>Start your Human
                <span class="text-buttercup">Revolution </span>today
            </h1>
            <p>A wonderful serenity has taken posession of my entire soul, like these sweet mornings of spring which i
                enjoy whit my whole heart.</p>
        </div>
    </div>


</template>

<script>
export default {
    name: 'JumbotronComponent'
}
</script>

<style lang="scss" scoped>
.jumbotron {
    position: relative;
    width: 100%;
    height: 830px;
    background-image: url('public/images/slide-1.jpg');

    h1 {
        font-size: 4em;
    }

    p {
        font-size: 1.3em;
    }

    .frase {
        position: absolute;
        top: 25%;
        left: 48%;
        width: 33%;
    }

}
</style>