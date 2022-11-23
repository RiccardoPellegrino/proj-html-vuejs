<template>
    <div class="padre">

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.padre {
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: 40px;
    right: 10px;
    background-color: $mineshaft;
    color: #FFF;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
}
</style>

