<template>
  <header>
    <router-view name="nav"></router-view>
  </header>
  <main :class="{ noscroll: openform }">
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
  <div v-if="openform" class="form_fixed">
    <div class="form-background" @click="closeForm"></div>
    <Form />
  </div>
  <div v-if="openspon" class="form_fixed">
    <div class="form-background" @click="closeSpon"></div>
    <Sponsor />
  </div>
  <div>{{ openspon }}</div>
</template>

<script>
import { provide, ref } from "vue";
import "./assets/reset.css";
import Form from "./components/form.vue";
import Sponsor from "./components/Sponsor.vue";
export default {
  components: {
    Form,
    Sponsor,
  },

  setup() {
    const openform = ref(false);
    const openspon = ref(false);

    const openForm = () => {
      openform.value = true;
      document.body.style.overflow = "hidden";
    };
    const openSpon = () => {
      openspon.value = true;
      document.body.style.overflow = "hidden";
    };
    const closeSpon = () => {
      openspon.value = false;
      document.body.style.overflow = "";
      console.log("關閉");
    };
    const closeForm = () => {
      openform.value = false;
      document.body.style.overflow = "";
    };
    provide("openForm", openForm);
    provide("openSpon", openSpon);
    provide("closeForm", closeForm);
    provide("closeSpon", closeSpon);
    return {
      openform,
      openForm,
      closeForm,
      openspon,
      openSpon,
      closeSpon,
    };
  },
};
</script>

<style scoped>
@media (max-width: 64em) {
  header {
    height: 60px;
    width: 100vw;
  }
}
header {
  height: 80px;
  width: 100vw;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
main {
  min-height: 100vh;
  background-image: url("./assets/images/bg.jpg");
}
.form_fixed {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.form-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
}
.noscroll {
  pointer-events: none;
  overflow-y: hidden;
}
</style>
