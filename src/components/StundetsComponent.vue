<template>
    <div class="contenitore bg-white">
        <div id="titolo">
            <h1 class="text-center pt-5">What Students Say</h1>
        </div>
        <div class="mycontainer">
            <div class="testimonial">
                <div class="testimonial-pic">
                    <img src="public/images/1-100x100.jpg" class="user-pic active-pic" alt="">
                    <img src="public/images/2-100x100.jpg" class="user-pic" alt="">
                    <img src="public/images/4-100x100.jpg" class="user-pic" alt="">
                </div>
                <div class="testimonial-text">
                    <h3 class="text-center pt-3">Paints of the future</h3>
                    <div class="stellina">
                        <span>
                            <i class="fa-star fa-solid"></i><i class="fa-star fa-solid"></i><i
                                class="fa-star fa-solid"></i><i class="fa-star fa-solid"></i><i
                                class="fa-star fa-solid"></i>
                        </span>
                    </div>
                    <div class="user-text active-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                            doloremque quisquam pariatur ab accusantium neque perspiciatis? Fugiat cum id ut dolore
                            aliquam quae illo tenetur, assumenda fugit vitae placeat minima voluptate repudiandae!
                            Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum quae
                            cum quaerat?</p>
                    </div>
                    <div class="user-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                            lorems0 voluptate repudiandae!
                            Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum quae
                            cum quaerat?</p>
                    </div>
                    <div class="user-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloribus culpa corporis
                            lorm10 minima voluptate repudiandae!
                            Saepe, magnam? Rerum eaque est voluptatem debitis accusamus, minima dolore aliquid eum quae
                            cum quaerat?</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentsComponent'
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
    background-color: azure;
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
    display: none;
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
}

.user-text.active-text {
    display: block;
}

.user-pic.active-pic {
    // width: 100px;
    border: 2px solid $buttercup;
}
</style>