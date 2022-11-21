<template>
    <footer>
        <div class="flexcontainer">
            <ul class="list-1">
                <li class="no-underline">
                    <h3>Il tuo posto per <br> parlare</h3>
                    <br>
                </li>
                <li><img src="./img/ita.png" alt="" style="height: 15px;"> Italiano <i
                        class="fa-solid fa-angle-down"></i>
                </li>
                <br>
                <li><i class="fa-brands fa-twitter"></i> &nbsp; &nbsp; <i class="fa-brands fa-instagram"></i> &nbsp;
                    &nbsp;<i class="fa-brands fa-facebook"></i> &nbsp; &nbsp; <i class="fa-brands fa-youtube"></i> </li>
            </ul>
            <ul class="list">
                <li class="no-underline">
                    <h4>Prodotto</h4>
                    <br>
                </li>
                <li><a class="bianco" href="#">Scarica</a></li>
                <br>
                <li><a class="bianco" href="#">Perch&eacute; Discord</a></li>
                <br>
                <li><a class="bianco" href="#">Nitro</a></li>
                <br>
                <li><a class="bianco" href="#">Sicurezza</a></li>
                <br>
                <li><a class="bianco" href="#">Assistenza</a></li>
            </ul>
            <ul class="list">
                <li class="no-underline">
                    <h4>Compagnia</h4>
                    <br>
                </li>
                <li><a class="bianco" href="#">Chi siamo</a></li>
                <br>
                <li><a class="bianco" href="#">Lavora con noi</a></li>
                <br>
                <li><a class="bianco" href="#">Marchio</a></li>
                <br>
                <li><a class="bianco" href="#">Redazione</a></li>
                <br>
                <li><a class="bianco" href="#">Negozio</a></li>
            </ul>
            <ul class="list">
                <li class="no-underline">
                    <h4>Risorse</h4>
                    <br>
                </li>
                <li><a class="bianco" href="#">Scarica</a></li>
                <br>
                <li><a class="bianco" href="#">Perch&eacute; Discord</a></li>
                <br>
                <li><a class="bianco" href="#">Nitro</a></li>
                <br>
                <li><a class="bianco" href="#">Sicurezza</a></li>
                <br>
                <li><a class="bianco" href="#">Assistenza</a></li>
                <br>
                <li><a class="bianco" href="#">Scarica</a></li>
                <br>
                <li><a class="bianco" href="#">Perch&eacute; Discord</a></li>
                <br>
                <li><a class="bianco" href="#">Nitro</a></li>
                <br>
                <li><a class="bianco" href="#">Sicurezza</a></li>
                <br>
                <li><a class="bianco" href="#">Assistenza</a></li>
            </ul>

            <ul class="list">
                <li class="no-underline">
                    <h4>Norme</h4>
                    <br>
                </li>
                <li><a class="bianco" href="#">Scarica</a></li>
                <br>
                <li><a class="bianco" href="#">Perch&eacute; Discord</a></li>
                <br>
                <li><a class="bianco" href="#">Nitro</a></li>
                <br>
                <li><a class="bianco" href="#">Sicurezza</a></li>
                <br>
                <li><a class="bianco" href="#">Assistenza</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    height: 2000px;
    display: block;
    flex-flow: row wrap;
    justify-content: left;

}

a {
    text-decoration: none;
}

.flexcontainer {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 1170px;
    margin: 0 auto;
    padding-top: 80px;
    border-bottom: 2px solid #8EA1E1;
    padding-bottom: 30px
}
</style>