<template>
    <div class="card">
        <div class="card-image">
            <img src="public/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg" alt="">
            <div id="special" class="bg-fuelyellow text-white">SPECIAL</div>
        </div>
        <div>
            <div>
                <p id="titolozzo">How to be a DJ? Make Electronic Music</p>
            </div>
            <div>
                <p id="sottotitolo" class="text-silver">Electronic</p>
            </div>
        </div>
        <hr>
        <div id="pulsantiera">
            <div> <span class="text-buttercup"><i class="fas fa-signal">&nbsp</i></span> Advanced</div>
            <div> <span class="text-buttercup"><i class="fa-sharp fa-solid fa-list">&nbsp</i></span>8 Lectures</div>
            <div> <span class="text-buttercup"><i class="fa-regular fa-clock">&nbsp</i></span> 6 Hours</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCardComponent'
}
</script>

<style lang="scss" scoped>
.card {
    margin: 20px auto;
    width: 30%;
}

.card-image {
    position: relative;

    img {
        width: 100%;
    }

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
    font-size: 1.2em;
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