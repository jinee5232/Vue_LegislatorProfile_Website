<template lang="">
  <div style="display: block">
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
        <div class="BannerWord">
          <div class="BannerTitle">
            <h1 class="firstT">喵的未來，</h1>
            <h1 class="secondT">薩卡來守護</h1>
          </div>
          <p>你的一票，為台灣展開新的篇章</p>
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
@media screen and (min-width: 1200px) {
  .banner {
    width: 90vw;
    margin: 90px auto 0 auto;
  }
  #Bner7 {
    width: 90vw;
  }
  .BannerWord {
    .BannerTitle {
      font-size: 48px;
      margin-bottom: 15px;
    }
    p {
      font-size: 24px;
    }
  }
  .marquee-container {
    font-size: 30px;
    margin-bottom: 50px;
    height: 60px;
    line-height: 60px;
  }
  .img_banner {
    position: absolute;
    width: 100%;
    height: 600px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media (max-width: 1200px) {
  .banner {
    width: 90vw;
    margin: 90px auto 0 auto;
  }
  #Bner7 {
    width: 90vw;
  }
  .BannerWord {
    .BannerTitle {
      font-size: 32px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
    }
  }
  .marquee-container {
    font-size: 30px;
    margin-bottom: 50px;
    height: 60px;
    line-height: 60px;
  }
  .img_banner {
    position: absolute;
    width: 100%;
    height: 600px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .banner {
    width: 100vw;
    margin: 40px auto 0 auto;
  }
  #Bner7 {
    width: 100vw;
  }
  .marquee-container {
    font-size: 24px;
    margin-bottom: 30px;
    height: 40px;
    line-height: 40px;
  }
  .BannerWord {
    .BannerTitle {
      font-size: 28px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
    }
  }
  .img_banner {
    position: absolute;
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media (max-width: 768px) {
  .banner {
    width: 100vw;
    margin: 40px auto 0 auto;
  }
  #Bner7 {
    width: 100vw;
  }
  .marquee-container {
    font-size: 24px;
    margin-bottom: 30px;
    height: 40px;
    line-height: 40px;
  }
  .BannerWord {
    .BannerTitle {
      flex-direction: column;
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      display: none;
    }
  }
  .img_banner {
    position: absolute;
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
}
#Bner7 {
  max-width: 1440px;
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
    width: 15vw;
    height: auto;
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
  max-width: 1440px;
  /* background-image: url("../assets/images/Banner/banner_02_noShadow_6.png"); */
  padding: 0;
  overflow: hidden;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;

  .BannerWord {
    position: absolute;
    right: 15%;
    z-index: 20;
    top: 35%;
    .BannerTitle {
      display: flex;
      font-weight: bolder;
      color: aliceblue;
      .firstT {
        opacity: 0;
        animation: opacityCH 1s ease forwards;
        animation-delay: 5s;
      }
      .secondT {
        opacity: 0;
        animation: opacityCH 1s ease forwards;
        animation-delay: 6s;
      }
    }
    p {
      opacity: 0;
      font-weight: bold;
      color: #f4e869;
      animation: opacityCH 1s ease forwards;
      animation-delay: 7s;
    }
  }
  .img_banner {
    position: absolute;
    width: 100%;
    height: 600;
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
  height: auto;
  display: flex;
  font-weight: bold;
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
    transform: scale(0.8);
    opacity: 0.3;
  }
}
@keyframes opacityCH {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
