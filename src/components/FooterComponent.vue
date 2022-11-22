<template>
    <footer class="bg-buttercup">
        <div class="flexcontainer">
            <div class="space">
                <ul>
                    <li>
                        <h3>About</h3>
                        <br>
                    </li>
                    <p>Masterstudy is Education WordPress <br>
                        Theme featured by Learning <br>
                        Management System (LMS) for online <br>
                        education.Developed by StylemixThemes.</p>
                    <li> <i class="fa-brands fa-facebook"></i>&nbsp;
                        &nbsp;<i class="fa-brands fa-twitter"></i> &nbsp; &nbsp; <i class="fa-brands fa-instagram"></i>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <h4>Contact</h4>
                    <br>
                    <p>USA,California 20,First Avenue, <br>
                        California<br>
                        Tel.:+1 212 485 300 32<br>
                        Fax:+1212 3752414</p>
                    info@masterstudy.com
                </li>
            </ul>
            <ul>
                <li>
                    <h4 class="text-center" id="pages">Pages</h4>
                    <br>
                    <ul>
                        <li>Blog</li>
                        <li>Home</li>
                        <li>Shortcodes</li>
                    </ul>
                </li>

            </ul>
            <ul>
                <li>
                    <h4>Blog</h4>
                    <br>
                </li>

            </ul>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.space {
    width: 25%;
}

footer {
    height: 400px;
    display: block;
    flex-flow: row wrap;
    justify-content: left;

}

ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.flexcontainer {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
}

#pages {
    a {
        text-decoration: solid;
    }
}
</style>