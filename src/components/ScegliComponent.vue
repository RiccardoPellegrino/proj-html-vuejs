<template>
    <div class="padre"><i class="fa-sharp fa-solid fa-bars"></i>

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
    width: 40px;
    height: 44px;
    bottom: 20px;
    right: 10px;
    background-color: $mineshaft;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
}
</style>

