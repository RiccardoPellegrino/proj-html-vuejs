<template>
    <div class="card">
        <div class="card-image">
            <img :src="datiInInput.image" alt="">
            <div id="special" class="bg-fuelyellow text-white">{{ datiInInput.tag }}</div>
        </div>
        <div>
            <div>
                <p id="titolozzo">{{ datiInInput.titolo }}</p>
            </div>
            <div>
                <p id="sottotitolo" class="text-silver">{{ datiInInput.sottotitolo }}</p>
            </div>
        </div>
        <hr>
        <div id="pulsantiera">
            <div> <span class="text-buttercup"><i class="fas fa-signal">&nbsp</i></span>{{ datiInInput.tipo }}</div>
            <div> <span class="text-buttercup"><i class="fa-sharp fa-solid fa-list">&nbsp</i></span>{{
                    datiInInput.lezioni
            }} Lectures</div>
            <div> <span class="text-buttercup"><i class="fa-regular fa-clock">&nbsp</i></span>{{ datiInInput.ore }}
                Hours
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCardComponent',
    props: [
        'datiInInput'
    ]
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}

.card {
    margin: 20px auto;
    width: 30%;
}

.card-image {
    position: relative;
    cursor: pointer;


    #special {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 5px;
        padding: 5px;
        font-weight: 500;
    }
}

p {
    text-align: center
}

#titolozzo {
    font-weight: 500;
    font-size: 1.4em;
    padding: 20px 30px 0px 30px;
}

#sottotitolo {
    font-weight: 500;
    font-size: 1.1em;
}

#pulsantiera {
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
    padding-top: 15px;
}

hr {
    width: 90%;
    margin: 0 auto;
}
</style>