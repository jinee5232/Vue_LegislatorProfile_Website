<template lang="">
  <div class="activy_container">
    <div class="Activy_Img">
      <img v-show="ImgId === 1" :src="Act01" alt="" />
      <img v-show="ImgId === 2" :src="Act02" alt="" />
      <img v-show="ImgId === 3" :src="Act03" alt="" />
      <img v-show="ImgId === 4" :src="Act04" alt="" />
      <img v-show="ImgId === 5" :src="Act05" alt="" />
      <img v-show="ImgId === 6" :src="Act06" alt="" />
    </div>
    <p class="Act_page2">{{ ImgId }}/6</p>
    <img
      v-show="ScrollImg === true"
      class="Act_scroll"
      :src="ScrollDown"
      alt=""
    />
    <img
      v-show="ScrollImg === false"
      class="Act_scroll"
      :src="ScrollUp"
      alt=""
    />
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      @slideChange="onSlideChange"
      :mousewheel="true"
      :pagination="{
        clickable: false,
      }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="todo in carouselData" :key="todo.id">
        <div class="carouselAct2">
          <div class="Act_img2">
            <!-- <img :src="todo.img" alt="" /> -->
          </div>
          <div class="Act_content2">
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.article }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

import ScrollDown from "../assets/images/03_activity/scroll.png";
import ScrollUp from "../assets/images/03_activity/scrollup.png";
import Act01 from "../assets/images/03_activity/activity01.jpeg";
import Act02 from "../assets/images/03_activity/activity02.jpeg";
import Act03 from "../assets/images/03_activity/activity03.jpeg";
import Act04 from "../assets/images/03_activity/activity04.jpg";
import Act05 from "../assets/images/03_activity/activity05.jpg";
import Act06 from "../assets/images/03_activity/activity06.jpg";
export default {
  data() {
    return {
      ScrollImg: true,
      Act01,
      Act02,
      Act03,
      Act04,
      Act05,
      Act06,
      ScrollDown,
      ScrollUp,
      ImgId: 1,
      carouselData: [
        {
          id: 1,
          img: Act01,
          title: "參與台北寵物論壇，爭取貓咪友善環境",
          article:
            "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的VIP休憩空間。",
        },
        {
          id: 2,
          img: Act02,
          title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
          article:
            "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
        },
        {
          id: 3,
          img: Act03,
          title: "喵喵減肥班，成果發表會！",
          article:
            "為了讓更多人知道貓咪體重過重對貓身不好，我們開辦了喵喵減肥班，成果發表以「模特兒走秀」形式呈現，讓更多人意識到貓身健康有多麼重要！",
        },
        {
          id: 4,
          img: Act04,
          title: "寵物友善咖啡市集",
          article:
            "讓「咖啡」與「寵物」蹦出最新鮮的市集組合，歡迎帶著你心愛的寵物們來到這邊，除了可以一同享受咖啡香所帶來的色香味俱全饗宴，也可以與各個寵物與主人們互相交流。",
        },
        {
          id: 5,
          img: Act05,
          title: "與薩卡同行，浪貓關懷",
          article:
            "在看不見的角落裡，有那麼一群人為了浪浪，願意耗費自己的金錢、心力，甚至投入大量的時間，都是為了讓浪浪有個美好的家，薩卡舉辦的全台中途贈糧活動正式開跑，並努力保護流浪貓、改善飼養環境，協助毛孩們有飯吃，有機會成就一個愛他的家！",
        },
        {
          id: 6,
          img: Act06,
          title: "彈跳甲魚湯之長泳訓練營",
          article:
            "泳渡薩卡島是很多人的人生清單！是台灣一年一度的盛事，為了迎接泳渡薩卡島的盛事，薩卡舉辦訓練營方便夥伴一同來督促彼此的體力和意志力，讓我們一起來和薩卡游泳吧！畢竟有好的體力，才能當好鏟屎官！",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSlideChange(swiper) {
      console.log(swiper.activeIndex);
      this.ImgId = swiper.activeIndex + 1;
      if (swiper.activeIndex === 5) {
        this.ScrollImg = false;
      } else if (swiper.activeIndex === 0) {
        this.ScrollImg = true;
      }
      console.log("照片:" + this.ImgId);
    },
  },
  setup() {
    // const onSlideChange = (swiper) => {
    //   console.log(swiper.activeIndex);
    //   ImgId = swiper.activeIndex + 1;
    //   console.log("照片:" + ImgId);
    // };

    return {
      //   onSlideChange,
      modules: [Mousewheel],
    };
  },
};
</script>

<style scoped>
.activy_container {
  height: 500px;
  width: 90vw;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  position: relative;
  .Act_page2 {
    position: absolute;
    right: 5%;
    bottom: 10%;
    z-index: 5;
    font-size: 24px;
    color: #ff6666;
  }
  .Act_scroll {
    position: absolute;
    right: 0%;
    bottom: 25%;
    z-index: 5;
    animation-name: scrollMove;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .Activy_Img {
    background-color: aliceblue;
    position: absolute;

    z-index: 5;
    overflow: hidden;
    box-shadow:
      rgba(46, 65, 240, 0.4) 5px 5px,
      rgba(46, 65, 240, 0.3) 10px 10px,
      rgba(46, 65, 240, 0.2) 15px 15px,
      rgba(46, 65, 240, 0.1) 20px 20px,
      rgba(46, 65, 240, 0.05) 25px 25px;
    img {
      object-fit: cover;

      &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease;
      }
    }
  }
  .mySwiper2 {
    height: 500px;
    position: absolute;
    right: 0;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carouselAct2 {
      height: 100%;
      display: flex;
      width: 100%;

      .Act_img2 {
        background-color: white;
        position: relative;
        img {
          object-fit: cover;
          width: 500px;
          height: 500px;
        }
        &::before {
          position: absolute;
          height: 100%;
          width: 5px;
          right: 20px;
          background-color: rgb(170, 135, 71);
          content: "";
        }
      }

      .Act_content2 {
        box-sizing: border-box;
        width: auto;
        height: 500px;
        padding: 5%;
        text-align: left;
        position: relative;
        &::before {
          position: absolute;
          height: 15px;
          width: 15px;
          border-radius: 7px;
          left: -30px;
          top: 30%;
          background-color: rgb(170, 135, 71);
          content: "";
        }
        h2 {
          margin-bottom: 32px;
          font-weight: bolder;
          color: #ff6666;
        }
        p {
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 5px;
          font-weight: 600;
        }
      }
    }
  }
}
@keyframes scrollMove {
  0% {
    bottom: 25%;
  }
  100% {
    bottom: 20%;
  }
}
@media screen and (min-width: 1200px) {
  .Activy_Img {
    width: 500px;
    height: 500px;
    left: 0;
    top: -50px;
    img {
      width: 500px;
      height: 500px;
    }
  }
  .Act_img2 {
    min-width: 500px;
    height: 500px;
    width: 500px;
  }
  .mySwiper2 {
    width: calc(90vw - 100px);
    max-width: calc(1440px - 100px);
  }
}
@media (max-width: 1200px) {
  .Activy_Img {
    width: 400px;
    height: 400px;
    left: 0;
    top: -50px;

    img {
      width: 400px;
      height: 400px;
    }
  }
  .Act_img2 {
    height: 500px;
    width: 400px;
    min-width: 400px;
  }
  .mySwiper2 {
    width: calc(90vw - 100px);
    max-width: calc(1440px - 100px);
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .Activy_Img {
    width: 300px;
    height: 300px;
    left: 0;
    top: -50px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  .Act_img2 {
    height: 500px;
    width: 300px;
    min-width: 300px;
  }
  .mySwiper2 {
    width: calc(90vw - 100px);
    max-width: calc(1440px - 100px);
  }
}
@media (max-width: 768px) {
  .Activy_Img {
    display: none;
  }
  .Act_img2 {
    height: 500px;
    width: 50px;
    min-width: 50px;
  }
  .mySwiper2 {
    width: 90vw;
    max-width: 1440px - 50px;
  }
  .Act_scroll {
    left: 10%;
    bottom: 5%;
    transform: scale(0.5);
  }
  @keyframes scrollMove {
    0% {
      bottom: 5%;
    }
    100% {
      bottom: 0%;
    }
  }
}
</style>
