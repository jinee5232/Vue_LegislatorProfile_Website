<template lang="">
  <div>
    <div style="background-color: #fcb1c9">
      <div class="banner">
        <div id="Bner7">
          <img src="../assets/images/Banner/banner_02_noShadow_6.png" alt="" />
        </div>
        <div class="img_banner" id="Bner6">
          <img src="../assets/images/Banner/Shadow_2.png" alt="" />
        </div>
        <div
          :class="image.class"
          v-for="(image, index) in images"
          :key="index"
          :id="'Bner' + index"
        >
          <img
            :src="image.src"
            :alt="'Image' + 'index'"
            :class="image.animation"
            v-bind:style="{ 'animation-delay': index * 1000 + 'ms' }"
          />
        </div>
      </div>
    </div>

    <!-- marquee start -->
    <div class="marquee-container">
      <div class="marquee-content">
        立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／
      </div>
      <div class="marquee-content">
        立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／
      </div>
      <div class="marquee-content">
        立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／立委候選人請支持貓黨１號＼＼喵薩卡／／
      </div>
    </div>
    <!-- marquee end -->
  </div>
</template>
<script>
import SmallFish from "../assets/images/Banner/banner_02_noShadow_4.png";
import BigFish from "../assets/images/Banner/banner_02_noShadow_1.png";
import PinkBorder from "../assets/images/Banner/Shadow_3.png";
import BlueBorder from "../assets/images/Banner/Shadow_5.png";
import Palm from "../assets/images/Banner/banner_02_ball.png";
export default {
  data() {
    return {
      images: [
        {
          src: PinkBorder,
          class: "img_banner",
          animation: "upInDown",
          animated: false,
        },
        {
          src: BlueBorder,
          class: "img_banner ",
          animation: "upInDown",
          animated: false,
        },
        {
          src: BigFish,
          class: "img_banner ",
          animation: "downInUp",
          animated: false,
        },
        {
          src: SmallFish,
          class: "img_banner ",
          animation: "rightInLeft",
          animated: false,
        },
        {
          src: Palm,
          class: "",
          animation: "bigToMin ",
          animated: false,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
#Bner7 {
  max-width: 1440px;
  width: 90vw;
  font-size: 0px;
  display: block;
  padding: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
}
#Bner1 {
  z-index: 1;
  img {
    transform: translateY(-100%);
    opacity: 0;
  }
}
#Bner4 {
  position: absolute;
  z-index: 15;
  top: 45%;
  left: 72%;
  img {
    width: 194px;
    height: 198px;
    opacity: 0;
    transform: scale(5);
  }
}
#Bner3 {
  z-index: 3;
  img {
    transform: translateX(50%);
    opacity: 0;
  }
}
#Bner0 {
  z-index: 4;
  img {
    transform: translateY(-100%);
    opacity: 0;
  }
}
#Bner6 {
  z-index: 5;
}
#Bner2 {
  z-index: 6;
  img {
    transform: translateY(100%);
    opacity: 0;
  }
}
.banner {
  width: 90vw;
  max-width: 1440px;
  /* background-image: url("../assets/images/Banner/banner_02_noShadow_6.png"); */
  padding: 0;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 90px auto 0 auto;
  .img_banner {
    position: absolute;
    width: 100%;
    height: 600px;
    font-size: 0px;
    display: block;
    padding: 0 auto;
    margin: 0;
    overflow: hidden;
    top: 0;
    left: 0;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.marquee-container {
  width: 100%;
  display: flex;
  font-size: 30px;
  margin-bottom: 50px;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  color: #d37272;
  border-top: 3px solid #d37272;
  border-bottom: 3px solid #d37272;
  overflow: hidden;
}
.marquee-content {
  animation: marquee-content 10s linear infinite;
  display: inline-block;
  white-space: nowrap;
}

/* 跑馬燈動畫 */
@keyframes marquee-content {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.rightInLeft {
  animation: rightInLeft 1s ease forwards;
}
.upInDown {
  animation: upInDown 1s ease forwards;
}
.downInUp {
  animation: downInUp 1s ease forwards;
}
.bigToMin {
  animation: bigToMin 1s ease forwards;
}

@keyframes upInDown {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes rightInLeft {
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes downInUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes bigToMin {
  0% {
    transform: scale(5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}
</style>
