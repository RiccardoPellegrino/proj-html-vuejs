<template>
    <footer class="bg-buttercup">
        <div class="flexcontainer">
            <div class="space ">
                <ul class="no-list">
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
            <div class="space">
                <ul class="no-list">
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
            </div>
            <div class="space ">
                <ul class="no-list">
                    <li>
                        <h4>Pages</h4>
                        <br>
                        <ul>
                            <div class="d-flex">
                                <div>
                                    <li>Blog</li><br>
                                    <li>Home</li><br>
                                    <li>Shortcodes</li>
                                </div>
                                <div class="ms-5">
                                    <li>Courses</li><br>
                                    <li>Membership</li><br>
                                    <li>Typography</li>
                                </div>
                            </div>
                        </ul>
                    </li>

                </ul>
            </div>
            <div class="space">
                <h4>Blog</h4>
                <br>
                <div class="d-flex flex-column">
                    <div>
                        <img src="public/images/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
                        <span>Our main target is to "Developing Yourself as a Leader"</span>
                        <span>-August 9,2018</span>
                    </div>
                    <div>
                        <img src="public/images/photo-1490376840453-5f616fbebe5b-50x50.jpeg" alt="">
                        <span> Those Other Collage Expenses You Aren't Thinking About</span>
                        <span>-june 3,2015</span>
                    </div>
                </div>
            </div>
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

.no-list {
    list-style: none;
}

.flexcontainer {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
}

#pages {}
</style>