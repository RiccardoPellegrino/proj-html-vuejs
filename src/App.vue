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
      <InvestingComponent />
    </section>
    <section>
      <WhymyCoursesComponent />
    </section>
    <section>
      <StatisticComponent />
    </section>
    <section>
      <StudentsComponent />
    </section>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import JumbotronComponent from './components/JumbotronComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CountDownComponent from './components/CountDownComponent.vue';
import FirmaComponent from './components/FirmaComponent.vue';
import CoursesComponent from './components/CoursesComponent.vue';
import InvestingComponent from './components/InvestingComponent.vue';
import WhymyCoursesComponent from './components/WhymyCoursesComponent.vue';
import StatisticComponent from './components/StatisticComponent.vue';
import StudentsComponent from './components/StundetsComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    CountDownComponent,
    FirmaComponent,
    CoursesComponent,
    InvestingComponent,
    WhymyCoursesComponent,
    StatisticComponent,
    StudentsComponent
  }
}
</script>

<style lang="scss" scoped>

</style>