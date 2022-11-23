<template>
    <div class="card">
        <div class="card-image">
            <img :src="datiInInput.image" alt="">
            <div class="prezzoCard">
                <div>
                    <p><span class="prezzoPieno text-buttercup">$30.45</span></p>
                </div>
                <div>
                    <p><span class="prezzoScontato text-buttercup">${{ datiInInput.prezzo }}</span></p>
                </div>
            </div>
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
@use '../assets/styles/partials/variables' as *;

img {
    width: 100%;
}

.card {
    margin: 20px auto;
    width: 30%;

    &:hover .card-image .prezzoCard {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(50, 50, 50, 0.7);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    &:hover {
        box-shadow: 0 6px 20px 0 rgba(77, 77, 77, 0.14);
    }

}

.prezzoCard div p {
    margin: auto;
}

.prezzoScontato {
    font-size: 2.3em;
    font-weight: 700;
}

.prezzoPieno {
    font-size: 1.8em;
    text-decoration: line-through;
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

    &:hover {
        color: $buttercup;
    }
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

.prezzoCard {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    padding: 70px;
}
</style>