<template>
    <div id="sfondo">
        <div id="description">
            <span class="text-buttercup fs-2">Get My Exclusive Investing Book just fot $19.50</span>

            <p class="text-white fst-italic">Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, vitae
                pellentesque
                urna elementum
                cursus.</p>
            <div class="mt-5"> <a href=""> <img src="public/images/amazon.png" alt=""> </a></div>
        </div>
        <div id="mano">
            <img src="public/images/book.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'InvestingComponent',
}
</script>

<style lang="scss" scoped>
#sfondo {
    height: 600px;
    background-image: url('public/images/slider_1-1917x607-1914x606.jpg');
    position: relative;

}

#mano {
    position: absolute;
    bottom: 0;
    right: 350px;
}

span {

    font-weight: 700;

}

#description {
    width: 468px;
    height: 600px;
    padding-top: 100px;
    position: absolute;
    top: 0;
    left: 300px;
    text-align: center;
}

p {
    padding-top: 30px;
    font-size: 22px;
}
</style>