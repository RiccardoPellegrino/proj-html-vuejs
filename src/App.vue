<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <section>
      <JumbotronComponent />
    </section>
    <section>
      <FirmaComponent />
    </section>
    <CoursesComponent />
    <section>

    </section>

  </main>

  <footer>
    <!-- <FooterComponent /> -->
  </footer>
</template>

<script>
import JumbotronComponent from './components/JumbotronComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CountDownComponent from './components/CountDownComponent.vue';
import FirmaComponent from './components/FirmaComponent.vue';
import CoursesComponent from './components/CoursesComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    CountDownComponent,
    FirmaComponent,
    CoursesComponent
  }
}
</script>

<style lang="scss" scoped>

</style>