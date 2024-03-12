import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createStore } from "vuex";

//匯入fortawesome Start
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fab);
//匯入fortawesome End

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon); //fortawesome 加到網頁
app.use(router);
app.mount("#app");

// library.add(faShoppingCart, faInstagram, faFacebookSquare)
