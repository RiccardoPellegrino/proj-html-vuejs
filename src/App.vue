<template>
  <header>
    <HeaderComponent />
    <JumbotronComponent />
    <CalendarioComponent />
  </header>
  <main>
    <SectionComponent />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import JumbotronComponent from './components/JumbotronComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CalendarioComponent from './components/CalendarioComponent.vue'
import SectionComponent from './components/SectionComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    CalendarioComponent,
    SectionComponent
  }
}
</script>

<style lang="scss" scoped>

</style>