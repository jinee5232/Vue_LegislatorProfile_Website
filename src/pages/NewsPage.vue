<template lang="">
  <swiper
    :scrollbar="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper1"
  >
    <swiper-slide v-for="todo in carouselData" :key="todo.id">
      <div class="carouselAct">
        <div class="Act_content">
          <div class="actTitle">
            <div class="Tsize circle01">政</div>
            <div class="Tsize circle01">策</div>
            <div class="Tsize circle02">{{ todo.number }}</div>
          </div>
          <h2>{{ todo.title }}</h2>
          <p>{{ todo.article[0] }}</p>
          <p>{{ todo.article[1] }}</p>
          <p>{{ todo.article[2] }}</p>
          <p class="Act_page">{{ todo.id }}/4</p>
        </div>
        <div class="Act_img">
          <img :src="todo.img" alt="" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Scrollbar, Navigation } from "swiper/modules";
import Poli01 from "../assets/images/04_policy/policy02.jpg";
import Poli02 from "../assets/images/04_policy/policy03.jpg";
import Poli03 from "../assets/images/04_policy/policy04.jpg";
import Poli04 from "../assets/images/04_policy/policy05.jpg";
export default {
  data() {
    return {
      carouselData: [
        {
          id: 1,
          number: "一",
          img: Poli01,
          title: "不讓貓貓過重，過重也是一種虐待！",
          article: [
            "1.拍攝線上宣導影片：邀請知名貓咪YouTuber以及獸醫來講解貓貓的體重過重會有何隱憂。",
            "2.辦理貓貓減肥講座：邀請飼主們共襄盛舉，一起來了解如何幫貓貓們健康瘦身，以及維持健康體態。",
            "3.舉辦貓貓減肥班：與寵物托育業者合作，面向忙碌的飼主，可以將貓貓送到減肥班，通過控制飲食以及運動，讓貓貓們更健康。",
          ],
        },
        {
          id: 2,
          number: "二",
          img: Poli02,
          title: "為毛孩子謀福利！推動寵物醫療保障方案",
          article: [
            "1.設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
            "2.提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
            "3.合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論。",
          ],
        },
        {
          id: 3,
          number: "三",
          img: Poli03,
          title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
          article: [
            "1.建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
            "2.推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
            "3.舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
          ],
        },
        {
          id: 4,
          number: "四",
          img: Poli04,
          title: "推廣寵物飼養教育，讓愛更加專業",
          article: [
            "1.建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
            "2.推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
            "3.製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。",
          ],
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar, Navigation],
    };
  },
};
</script>

<style scoped>
.mySwiper1 {
  height: 500px;
  width: 90vw;
  max-width: 1440px;

  .swiper-slide {
    text-align: center;

    /* background: #fff; */

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carouselAct {
    height: 100%;
    display: flex;
    width: 100%;
    .Act_img {
      border-radius: 30px;
      overflow: hidden;
      right: 0;
      margin: auto 0;
      padding: 0;
      img {
        object-fit: cover;
        height: 500px;
        width: 500px;
        display: block;
        border-radius: 30px;
        &:hover {
          transform: scale(1.1);
          transition: transform 0.5s ease;
        }
      }
    }

    .Act_content {
      box-sizing: border-box;
      height: 500px;

      padding: 2% 5%;
      text-align: left;
      position: relative;
      .actTitle {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        .Tsize {
          width: 50px;
          height: 50px;
          border-radius: 30px;
          font-weight: 600;
          line-height: 50px;
          text-align: center;
          border: 5px solid #f4e869;
          font-size: 32px;
          color: #ff6666;
          margin-right: 5px;
        }
        .circle01 {
          background-color: #f4e869;
        }
        .circle02 {
          background-color: #fff;
        }
      }

      h2 {
        font-size: 36px;
        margin-bottom: 32px;
        font-weight: bolder;
        line-height: 48px;
        color: #ff6666;
        position: relative;
        &::before {
          position: absolute;
          bottom: -15px;
          width: 100%;

          content: "";
          height: 2px;
          background-color: #b9b9b9;
        }
      }
      p {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 5px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .Act_page {
        position: absolute;
        font-size: 18px;
        color: #ff6666;
        right: 20px;
        bottom: 20px;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .Act_img {
    height: 450px;
    width: 450px;
  }
  .Act_content {
    width: calc(100% - 450px);
  }
}
@media (max-width: 1200px) {
  .Act_img {
    height: 400px;
    width: 400px;
  }
  .Act_content {
    width: calc(100% - 400px);
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .carouselAct {
    position: relative;
    .Act_img {
      position: absolute;
      height: 500px;
      width: 500px;
      opacity: 0.1;
      z-index: 1;
    }
    .Act_content {
      position: absolute;
      width: 100%;
      z-index: 2;
    }
  }
}
@media (max-width: 768px) {
  .Act_img {
    display: none;
  }
  .Act_content {
    width: 100%;
  }
}
</style>
