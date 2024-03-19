<template>
  <div>
    <Banner />
  </div>
  <div id="About" :class="{ floor1: true, testenter: floorshow1 }" ref="floor1">
    <div class="article_title article_title1">
      <transition name="titleAnimation">
        <h2
          if="floorshow1"
          class="hp-h2"
          :class="{ 'animate-title': floorshow1 }"
        >
          關於薩卡
        </h2>
      </transition>
    </div>

    <About />
  </div>

  <div class="bgwhite" id="Activy">
    <div :class="{ floor1: true, testenter: floorshow2 }" ref="floor2">
      <div class="article_title article_title2">
        <transition name="titleAnimation2">
          <h2 class="hp-h2" :class="{ 'animate-title': floorshow2 }">
            政治議題
          </h2>
        </transition>
      </div>

      <News />
    </div>
  </div>

  <div :class="{ floor2: true, testenter: floorshow3 }" ref="floor3" id="News">
    <div class="article_title article_title1">
      <transition name="titleAnimation3" appear>
        <h2 class="hp-h2" :class="{ 'animate-title': floorshow3 }">最新活動</h2>
      </transition>
    </div>
    <Activy v-if="floorshow3" />
  </div>
  <div class="Planebg">
    <div :class="{ articlediv: true, testenter: floorshow4 }" ref="floor4">
      <div class="article_title article_title2">
        <transition name="titleAnimation2">
          <h2 class="hp-h2" :class="{ 'animate-title': floorshow4 }">
            服務信箱
          </h2>
        </transition>
      </div>
      <div class="mailbox-container">
        <h3>您的聲音，我們的行動！</h3>
        <p>
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。<br />
          分享您的想法，一同為我們的未來打造更美好！
        </p>
      </div>
      <div class="mailbox_bg">
        <img
          class="plane"
          :class="{ 'plane-fly': floorshow4 }"
          :src="currentImg"
          @mouseover="hoverImage"
          @mouseout="resetImage"
          @click="formTrue"
          alt=""
        />
        <img
          class="plane_sm"
          :src="currentImg"
          @mouseover="hoverImage"
          @mouseout="resetImage"
          @click="formTrue"
          alt=""
        />

        <svg id="svg_path" viewBox="0 0 1372 850" pres>
          <path
            class="cls-1"
            d="M1358,513.88c-172-76-390,44-576-16-158-50.97-162.6-160.41-298-298C360,73.88,170,15.88,14,29.88"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
import Banner from "../components/Banner.vue";
import About from "./AboutPage.vue";
import News from "./NewsPage.vue";
import Activy from "./ActivityPage.vue";
import Service from "../components/Service.vue";
import hoverplane from "../assets/images/01_homepage/airplane2.png";
import plane from "../assets/images/01_homepage/airplane1.png";
import PlaneBG from "../assets/images/01_homepage/planeMT.png";
export default {
  data() {
    return {
      // hoverplane: "../assets/images/01_homepage/airplane2.png",
      // plane: "../assets/images/01_homepage/airplane1.png",
      currentImg: plane,
      floorshow1: false,
      floorshow2: false,
      floorshow3: false,
      floorshow4: false,
    };
  },
  components: {
    Service,
    Banner,
    About,
    News,
    Activy,
  },
  methods: {
    hoverImage() {
      this.currentImg = hoverplane;
    },
    resetImage() {
      this.currentImg = plane;
    },
    handleScroll() {
      this.currentScroll = window.scrollY;

      if (this.currentScroll >= this.$refs["floor1"].offsetTop - 400) {
        setTimeout(() => {
          this.floorshow1 = true;
        }, 200);
      }
      if (this.currentScroll >= this.$refs["floor2"].offsetTop - 500) {
        this.floorshow2 = true;
      }
      if (this.currentScroll >= this.$refs["floor3"].offsetTop - 400) {
        this.floorshow3 = true;
      }
      if (this.currentScroll >= this.$refs["floor4"].offsetTop - 400) {
        console.log("到");
        this.floorshow4 = true;
      }
    },
    formTrue() {
      this.$emit("open-form"); //發送事件到父組件
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  setup() {
    const openForm = inject("openForm");
    const formTrue = () => {
      openForm();
    };
    return {
      formTrue,
    };
  },
};
</script>
<style>
img:hover {
  transform: scale(1.2) 1s;
}
#dC_left {
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: #307CAE; */
}
#dC_left > p {
  font-weight: 600;
  text-align: justify;
}
.meowMark {
  color: #d37272;
  font-weight: 600;
}

.span-yellow {
  color: #b70404;
  font-weight: bold;
  background-color: #ffeadd;
}
.about-content {
  font-weight: 600;
}
.about-h2 {
  color: #ff6666;

  font-weight: 600;

  letter-spacing: 0.1em;
  display: block;
  margin: 20px 0 0 0;
}

.floor1 {
  max-width: 1440px;
  margin: 0 auto;
  width: 90vw;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
  padding-top: 150px;
  margin-bottom: 50px;
}
.bgwhite {
  background-color: #fff;
  width: 100%;
}
.floor2 {
  max-width: 1440px;
  margin: 0 auto;
  width: 90vw;
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
}
.articlediv {
  max-width: 1440px;
  width: 90vw;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  overflow: hidden;

  /* background-color: #5E1ACD; */
}
/* .Planebg {
  background-image: url("../assets/images/01_homepage/planeMT.png");
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: bottom;
} */

.testenter {
  opacity: 1;
  transition: all 0.5s ease;
}

.hp-h2 {
  font-weight: 600;
  letter-spacing: 10%;
  color: #307cae;
  transition-duration: 1s;
  margin: 20px 0;
  /* 一定要有relative，子層偽元素才會顯示 */
  position: relative;
  display: inline-block;
}
.hp-h2::before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 16px;
  margin: 15px 0 0 0;
  background-color: #d9d9d9;
  transform-origin: center;
  transform: scaleX(0.5);
}
.animate-title::before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 16px;
  margin: 15px 0 0 0;
  background-color: #d9d9d9;
  transform-origin: center;
  transform: scaleX(0.5);
  animation: title 3s forwards;
  animation-duration: 2s;
}
.titleAnimation-enter-from {
  opacity: 0;
}
.titleAnimation-enter-to {
  opacity: 1;
}
.titleAnimation-enter-active,
.titleAnimation-enter-active::before,
.titleAnimation-enter-active2,
.titleAnimation-enter-active2::before,
.titleAnimation-enter-active3,
.titleAnimation-enter-active3::before {
  transition: all 0.3s ease-in;
}
@keyframes title {
  from {
    transform: scaleX(0.5);
  }
  to {
    transform: scaleX(1);
  }
}

/* 飛機在此 */

.mailbox-container {
  position: relative;
  h3 {
    font-weight: 600;
    letter-spacing: 10%;
    line-height: 50px;
    color: #ff6666;
    text-align: center;
  }
  p {
    text-align: center;
  }
}

.mailbox_bg {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
#svg_path {
  position: absolute;
  top: -350px;
  left: 0px;
  z-index: 0;
}

.cls-1 {
  fill: none;
  stroke: #dcdddd;
  stroke-dasharray: 0 0 10 10;
  stroke-linejoin: round;
  stroke-opacity: 0.5;
  stroke-width: 5px;
}
.plane {
  position: absolute;
  top: -350px;
  left: -15px;
  z-index: 2;
  cursor: pointer;
}
.plane_sm {
  position: absolute;
  right: 0px;
  bottom: -90px;
}

.plane-fly {
  cursor: pointer;
  offset-path: path(
    "M6.41,19.69S335.34-22.48,546.26,271.33c77.41,108.74,140.92,258.28,395.89,232.32s304.48-38.42,408.26,.04"
  );
  animation: motion-move 3s ease-in-out 0s 1 alternate forwards;
}
.plane_sm:hover {
  transform: scale(0.7);
}
.plane:hover {
  transform: scale(1.2);
}
@keyframes motion-move {
  from {
    offset-distance: 5%;
    z-index: 2;
  }
  to {
    offset-distance: 90%;
    z-index: 6;
  }
}

.article_title {
  position: absolute;
  z-index: 10;
}
.about-content {
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 8px;
}
.about-h2 {
  font-size: 28px;
  line-height: 48px;
  letter-spacing: 0.1em;
  margin: 20px 0 0 0;
}
#dC_left > p {
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  line-height: 2.5rem;
}
.meowMark {
  font-size: 1.5rem;
}
@media screen and (min-width: 1200px) {
  .plane_sm {
    display: none;
  }
  .plane {
    display: block;
  }
  .mailbox-container {
    p {
      font-size: 24px;
      line-height: 50px;
      letter-spacing: 15px;
    }
  }
  .articlediv {
    height: 800px;
  }
  .floor2 {
    padding: 200px 0 50px 0;
    margin-bottom: 50px;
  }
  .hp-h2 {
    font-size: 48px;
  }
  .article_title2 {
    right: 0;
    top: 0;
  }
  .article_title1 {
    left: 0;
    top: 0;
  }
}
@media (min-width: 993px) and(max-width: 1200px) {
  .plane_sm {
    display: block;
  }
  .plane {
    display: none;
  }
  .mailbox-container {
    p {
      font-size: 24px;
      line-height: 40px;
      letter-spacing: 0px;
    }
  }
  .articlediv {
    height: 700px;
  }
  .floor2 {
    padding: 200px 0 50px 0;
    margin-bottom: 50px;
  }
  .hp-h2 {
    font-size: 48px;
  }
  .article_title2 {
    right: 0;
    top: 0;
  }
  .article_title1 {
    left: 0;
    top: 0;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .plane {
    display: none;
  }
  .plane_sm {
    display: block;
  }
  .mailbox-container {
    p {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0px;
    }
  }
  .articlediv {
    height: 600px;
  }
  .floor2 {
    padding: 150px 0 30px 0;
    margin-bottom: 20px;
  }
  .hp-h2 {
    font-size: 40px;
  }
  .article_title2 {
    right: 0;
    top: 0;
  }
  .article_title1 {
    left: 0;
    top: 0;
  }
}
@media (max-width: 768px) {
  .plane {
    display: none;
  }
  .plane_sm {
    display: block;
    transform: scale(0.5);
  }
  .mailbox-container {
    p {
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0px;
    }
  }
  .articlediv {
    height: 400px;
  }
  .floor2 {
    padding: 100px 0 20px 0;
    margin-bottom: 0px;
  }
  .hp-h2 {
    font-size: 36px;
  }
  .article_title1 {
    position: absolute;
    right: 0;
    top: 0;
  }
  .article_title2 {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
