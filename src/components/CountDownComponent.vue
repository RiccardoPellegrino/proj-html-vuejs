<template>
    <div class="mycontainer bg-buttercup">
        <div id="ricerca" class="px-5 py-3">
            <div>
                <p class="text-white ">Limited Sale: <span class="text-mineshaft">All courses with 55% off</span></p>
            </div>

            <div id="padre">
                <input type="text" placeholder="Enter your email" class="rounded-5 no-bordo h-40">
                <button class="no-bordo subscribe-button bg-abbey text-white rounded-5 h-40">Subscribe</button>
            </div>
        </div>
        <div id="countdown"> </div>

    </div>

</template>

<script>

export default {
    name: 'CountDownComponent'
}
</script>

<style lang="scss" scoped>
.mycontainer {
    width: 80%;
    margin: 0 auto;
    height: 160px;
    border-radius: 5px;

    position: relative;

    p {
        font-size: 2em;
    }
}



#ricerca,
#countdown {
    width: 50%;
}

.h-40 {
    height: 40px;
}

input {
    width: 100%;
    outline: none;
}

#padre {
    position: relative;
}

#padre button {
    position: absolute;
    right: 0;
}
</style>