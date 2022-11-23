<template>
    <div class="contenitore bg-white">
        <div id="titolo">
            <h1 class="text-center pt-5">What Students Say</h1>
        </div>
        <div class="mycontainer">



            <div class="testimonial">

                <div class="testimonial-pic">
                    <div @click="selezionaStudentePrecedente()" id="arrowL"><i class="fa-solid fa-arrow-left"></i></div>
                    <img src="public/images/1-100x100.jpg" class="user-pic"
                        :class="{ 'active-pic': indiceStudenteAttivo == 0 }" alt="student" @click="show = 'pic1'">
                    <img src="public/images/2-100x100.jpg" class="user-pic"
                        :class="{ 'active-pic': indiceStudenteAttivo == 1 }" alt="student" @click="show = 'pic2'">
                    <img src="public/images/4-100x100.jpg" class="user-pic"
                        :class="{ 'active-pic': indiceStudenteAttivo == 2 }" alt="student" @click="show = 'pic3'">
                    <div @click="selezionaStudenteSuccessivo()" id="arrowR"><i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div class="testimonial-text">

                    <div class="stellina">
                        <span>
                            <i class="fa-star fa-solid"></i><i class="fa-star fa-solid"></i><i
                                class="fa-star fa-solid"></i><i class="fa-star fa-solid"></i><i
                                class="fa-star fa-solid"></i>
                        </span>
                    </div>
                    <Transition name="fade">
                        <div class="user-text">
                            <h3 class="text-center pt-3">{{ titoloCommentoAttivo }}</h3>
                            <p>{{ testoCommentoAttivo }}</p>
                        </div>
                    </Transition>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { store } from './store';

export default {
    name: 'StudentsComponent',
    data() {
        return {
            store,
            show: 'pic1',
            indiceStudenteAttivo: 0,
            titoloCommentoAttivo: ' ',
            testoCommentoAttivo: ' ',

        }
    },
    methods: {
        cambiaStudente() {
            this.selezionaStudenteSuccessivo();
            setTimeout(this.cambiaStudente, 5000);
        },
        selezionaStudentePrecedente() {
            this.indiceStudenteAttivo = (this.indiceStudenteAttivo - 1) < 0 ? store.studenti.length - 1 : this.indiceStudenteAttivo - 1;
            this.aggiornaInformazioniStudenti();
        },
        selezionaStudenteSuccessivo() {
            this.indiceStudenteAttivo = ++this.indiceStudenteAttivo % store.studenti.length;
            this.aggiornaInformazioniStudenti();
        },
        aggiornaInformazioniStudenti() {
            this.titoloCommentoAttivo = store.studenti[this.indiceStudenteAttivo].titoloCommento;
            this.testoCommentoAttivo = store.studenti[this.indiceStudenteAttivo].testo;
        }
    },
    created() {
        this.cambiaStudente();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.contenitore {
    width: 100%;
    height: 800px;
}

.mycontainer {
    padding-top: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.testimonial {
    width: 100%;
    max-width: 800px;
    margin: auto;
}

.testimonial-text {

    background-color: white;
    color: black;
    width: 100%;
    height: 350px;
    position: relative;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
}

.user-text {
    width: 80%;
    text-align: center;
    line-height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // display: none;
}

.testimonial-pic {
    display: flex;
    justify-content: center;
    align-items: center;
}


.stellina {
    display: flex;
    justify-content: center;

}

p {
    margin-top: 40px;
    margin-bottom: 1rem;
}

.user-pic {
    border-radius: 50%;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
    transition: 0.3s;
    border: 2px solid transparent;
}

.active-pic {
    border: 3px solid tomato;
}

.user-pic.active-pic {
    border: 2px solid $buttercup;
}

.fade-enter-active {
    transition: all 1s ease-out;
}

.fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from {
    transform: translateX(-50px);
    opacity: 0;
}

.fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
}

#arrowL {
    margin-right: 20px;
    cursor: pointer;
}

#arrowR {
    margin-left: 20px;
    cursor: pointer;
}
</style>