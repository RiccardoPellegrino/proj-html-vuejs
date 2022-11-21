<template>
    <nav class="nav-bar bg-light">
        <div class="smallcontainer">
            <a class="navbar-brand" href="#">
                <img src="public\images\MasterStudy-1.svg" alt="Logo" width="300" height="30"
                    class="d-inline-block align-text-top">
            </a>
            <div class="navigazione d-flex align-items-center">
                <ul class="m-0 p-0">
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.url">{{ link.text }} </a>
                    </li>
                </ul>
                <i class="fa-brands fa-pinterest me-2"></i>
                <i class="fa-brands fa-instagram me-2"></i>
                <i class="fa-brands fa-facebook me-2"></i>
                <i class="fa-brands fa-twitter me-2"></i>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            links: [
                {
                    text: 'Courses',
                    url: '#'
                },
                {
                    text: 'Courses Formats',
                    url: '#'
                },
                {
                    text: 'Add Course',
                    url: '#'
                },
                {
                    text: 'Pages',
                    url: '#'
                },
                {
                    text: 'Demos',
                    url: '#'
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.containerc {
    display: flex;
    justify-content: center;
    align-items: center;
}

.smallcontainer {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 100px;
}

li {
    width: 100%;
    list-style: none;
    text-transform: capitalize;
    display: inline;
    padding-right: 1rem;
}

a {
    color: black;
    font-weight: 500;
    display: inline;
    text-decoration: none;
}

.nav-bar {
    margin: 0 auto;
    background-color: rgb(131, 81, 15);
}
</style>