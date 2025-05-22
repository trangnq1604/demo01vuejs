<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
   <HeaderComponant />
  <MainimgComponant />
  <PurpoiseComponant />
  
  <ReasonsComponant />
  <CtaComponant />
  <Modh2Componant title='ほか様々な電気工事を承ります！'/>
  <Electicia />
  <FooterComponant />
  </div>

</template>

<script>
import FooterComponant from './components/FooterComponant.vue';
import HeaderComponant from './components/HeaderComponant.vue';
import MainimgComponant from './components/MainimgComponant.vue';
import Electicia from './components/Electicial.vue';
import Modh2Componant from './components/Modh2Componant.vue';
import CtaComponant from './components/CtaComponant.vue';
import PurpoiseComponant from './components/PurpoiseComponant.vue';
import ReasonsComponant from './components/ReasonsComponant.vue';
export default {
  name: 'App',
  components: {
    HeaderComponant,
    MainimgComponant,
    ReasonsComponant,
    PurpoiseComponant,
    CtaComponant,
    Modh2Componant,
    Electicia,
    FooterComponant
  }
}
</script>

