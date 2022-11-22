<template>
    <div class="mycard p-5">
        <div class="icona ps-3 text-buttercup">
            <i :class="datiInInput.icona"></i>
        </div>
        <div class="specifiche ps-4">
            <div class="Titolo-card ">
                <h3> {{ datiInInput.titolo }} </h3>
            </div>
            <div class="testo pt-1">
                <p>
                    {{ datiInInput.testo }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReasonCardComponent',
    props: [
        'datiInInput'
    ]
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.icona {
    font-size: 60px;
}

.mycard {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 45%;
    border-left: 6px solid $buttercup;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 14%);
    margin: 10px;

    &:hover {
        background-color: $buttercup;
    }

    &:hover .icona {
        color: white;
    }
}
</style>