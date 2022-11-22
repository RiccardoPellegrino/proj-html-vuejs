<template>
    <div class="mycontainer bg-buttercup">
        <div id="ricerca" class="px-5 py-3">
            <div>
                <p class="text-white " style="font-weight: 900;">Limited Sale: <span class="text-mineshaft"
                        style="font-weight: 900;">All courses
                        with 55% off</span></p>
            </div>

            <div id="padre">
                <input type="text" placeholder="Enter your email" class="rounded-5 no-bordo h-40">
                <button class="no-bordo subscribe-button bg-abbey text-white rounded-5 h-40">Subscribe</button>
            </div>
        </div>
        <div id="countdown">
            <div id="contenitoreDate">
                <div>
                    <div class="tempoRimanente text-white">{{ tempoRimanente.giorniRimanenti }}</div>
                    <div class="tipoData">days</div>
                </div>
                <div>
                    <div class="tempoRimanente text-white"> {{ tempoRimanente.oreRimanenti }} </div>
                    <div class="tipoData">hours</div>
                </div>
                <div>
                    <div class="tempoRimanente text-white">{{ tempoRimanente.minutiRimanenti }}</div>
                    <div class="tipoData">minutes</div>
                </div>
                <div>
                    <div class="tempoRimanente text-white">{{ tempoRimanente.secondiRimanenti }}</div>
                    <div class="tipoData">seconds</div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

const UN_GIORNO_IN_MILLISECONDI = 1 * 24 * 60 * 60 * 1000;
const UN_ORA_IN_MILLISECONDI = 1 * 60 * 60 * 1000;
const UN_MINUTO_IN_MILLISECONDI = 1 * 60 * 1000;
const UN_SECONDO_IN_MILLISECONDI = 1 * 1000;

export default {
    name: 'CountDownComponent',
    data() {
        return {
            tempoRimanente: {
                giorniRimanenti: 0,
                oreRimanenti: 0,
                minutiRimanenti: 0,
                secondiRimanenti: 0
            }
        }
    },
    methods: {

        calcolaTempoRimanente() {

            const dataTarget = Date.parse('24 Dec 2022 00:12:00 GMT');
            const dataAdesso = new Date();

            const giorniRimanentiInMillisecondi = dataTarget - dataAdesso;

            const giorni = giorniRimanentiInMillisecondi / UN_GIORNO_IN_MILLISECONDI;
            const oreRestantiInMillisecondi = giorniRimanentiInMillisecondi % UN_GIORNO_IN_MILLISECONDI;

            const ore = oreRestantiInMillisecondi / UN_ORA_IN_MILLISECONDI;
            const minutiRestantiInMillisecondi = oreRestantiInMillisecondi % UN_ORA_IN_MILLISECONDI;

            const minuti = minutiRestantiInMillisecondi / UN_MINUTO_IN_MILLISECONDI;
            const secondiRestantiInMillisecondi = minutiRestantiInMillisecondi % UN_MINUTO_IN_MILLISECONDI;

            const secondi = secondiRestantiInMillisecondi / UN_SECONDO_IN_MILLISECONDI;

            this.tempoRimanente.giorniRimanenti = Math.trunc(giorni);
            this.tempoRimanente.oreRimanenti = Math.trunc(ore);
            this.tempoRimanente.minutiRimanenti = Math.trunc(minuti);
            this.tempoRimanente.secondiRimanenti = Math.trunc(secondi);

            setTimeout(this.calcolaTempoRimanente, 1000);

        }
    },
    created() {
        this.calcolaTempoRimanente();
    }
}
</script>

<style lang="scss" scoped>
.mycontainer {
    width: 80%;
    margin: 0 auto;
    height: 160px;
    border-radius: 5px;
    display: flex;
    position: relative;

    p {
        font-size: 2em;
    }
}

#contenitoreDate {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    height: 100%;
}

.tipoData {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
}

.tempoRimanente {
    text-align: center;
    font-size: 4em;
    font-weight: 600;
    margin-bottom: -10px;
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