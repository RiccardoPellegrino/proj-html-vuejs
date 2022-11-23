<template>
    <div class="contenitore bg-white">
        <div id="titolo">
            <h1 class="text-center pt-5">What Students Say</h1>
        </div>
        <div class="mycontainer">
            <div class="testimonial">
                <div class="testimonial-pic">
                    <img src="public/images/1-100x100.jpg" class="user-pic" :class="{ 'active-pic': show == 'pic1' }"
                        alt="student" @click="show = 'pic1'">
                    <img src="public/images/2-100x100.jpg" class="user-pic" :class="{ 'active-pic': show == 'pic2' }"
                        alt="student" @click="show = 'pic2'">
                    <img src="public/images/4-100x100.jpg" class="user-pic" :class="{ 'active-pic': show == 'pic3' }"
                        alt="student" @click="show = 'pic3'">
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
                        <div class="user-text" v-if="show == 'pic1'">
                            <h3 class="text-center pt-3">Come as you are</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                                doloremque quisquam pariatur ab accusantium neque perspiciatis? Fugiat cum id ut dolore
                                aliquam quae illo tenetur, assumenda fugit vitae placeat minima voluptate repudiandae!
                                Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum
                                quae
                                cum quaerat?</p>
                        </div>
                        <div class="user-text" v-else-if="show == 'pic2'">
                            <h3 class="text-center pt-3">Paints of the future</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                                lorems0 voluptate repudiandae!
                                Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum
                                quae
                                cum quaerat?</p>
                        </div>
                        <div class="user-text" v-else>
                            <h3 class="text-center pt-3">Investing for your future</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                                lorm10 minima voluptate repudiandae!
                                Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum
                                quae
                                cum quaerat?</p>
                        </div>
                    </Transition>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentsComponent',
    data() {
        return {
            show: 'pic1',
        }
    },
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
</style>