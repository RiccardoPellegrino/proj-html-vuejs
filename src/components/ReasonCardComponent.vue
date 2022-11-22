<template>
    <div class="mycard p-5">
        <div class="icona ps-3 text-buttercup">
            <i class="fa fa-solid fa-briefcase"></i>
        </div>
        <div class="specifiche ps-4">
            <div class="Titolo-card ">
                <h3>Enterpreneurship</h3>
            </div>
            <div class="testo pt-1">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem rem ducimus
                    architecto blanditiis obcaecati libero! Rerum cupiditate ipsa amet! Facere officia atque
                    odio est itaque sapiente veniam ad fugiat blanditiis repellat, mollitia delectus
                    facilis, ipsam inventore rerum culpa. Earum fuga facere.
                </p>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: 'ReasonCardComponent',
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.mycard {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 45%;
    border-left: 6px solid $buttercup;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 14%);
    margin: 10px;
}

.icona {
    font-size: 60px;
}
</style>