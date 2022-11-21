<template>
    <div class="jumbotron">
        <img src="public/images/slide-1.jpg" alt="">
    </div>
    <div class="frase">
        Start yout Human revolution today
        A wonderful serenity has taken posession of my entire soul, like these sweet mornings of spring which i
        enjoy whit my whole heart.
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
    height: 500px;
    background-image: url('');
    background-image: cover;

    .frase {
        position: absolute;
        top: 10;
        left: 10;
    }
}
</style>