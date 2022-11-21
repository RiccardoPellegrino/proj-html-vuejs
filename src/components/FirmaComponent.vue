<template>
    <div class="mycontainer bg-white">
        <div id="smallContainer">
            <div id="sinistra">
                <p>Hey there, my name is John Doe. I'm the founder of Brain Academy.</p>
                <img src="public/images/sign.jpg" alt="">
            </div>
            <div id="destra">
                <p>
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                    which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which
                    was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley
                    teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable
                    foliage of my trees, and but a few stray gleams steal into the inner sanctuary.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mycontainer {
    width: 100%;


    #smallContainer {
        width: 80%;
        margin: 0 auto;
        display: flex
    }
}

#sinistra,
#destra {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
}

#sinistra {
    padding: 60px;
    width: 40%;
}

#sinistra p {
    text-align: left;
    font-weight: 500;
    font-size: 2.5rem;
}

#destra {
    width: 60%;
    padding: 100px;
}

#destra p {
    text-align: left;
    font-size: 1.2em;
}
</style>