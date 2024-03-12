<template>
  <div class="Intro_div">
    <div class="Intro_Img"><img :src="currentContent.image" /></div>
    <div class="Intro_Content">
      <div v-html="currentContent.content"></div>
      <!-- <p>{{ currentContent.content }}</p> -->
    </div>
  </div>
</template>

<script>
import sakkaAnimation from "../assets/images/02_about/sakka_animation.gif";
import sakkaIntro from "../assets/images/02_about/sakka_intro.png";
import activityImage from "../assets/images/02_about/about-photo.png";
export default {
  props: {
    selectedContent: Object,
  },
  computed: {
    currentContent() {
      if (!this.selectedContent) {
        return {};
      }
      return this.contact.find((item) => item.id === this.selectedContent.id);
    },
  },
  data() {
    return {
      contact: [
        {
          id: 1,
          image: activityImage,
          content:
            "<div id='dC_left'><p>我堅信，藉由推動更完善的<span class='meowMark'>貓咪福利</span>和相關政策，更是間接地投資於台灣的未來。<br>畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的<span class='meowMark'>貓咪福利政策</span>，為台灣的GDP經濟帶來巨大效益。<br>因此，我期望能在立法院內推進這些政策，確保每一隻<span class='meowMark'>貓咪</span>都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。<br>讓我們一同護航台灣的幸福經濟，從照顧每一隻<span class='meowMark'>貓咪</span>開始。</p></div>",
        },
        {
          id: 2,
          image: sakkaAnimation,
          content:
            "<div class='about-content'><h2 class='about-h2'>經歷</h2><p class='about-content'>曾擔任「喵星宇宙」顧問</p><p class='about-content'>現任「喵喵大好」榮譽理事長</p><p class='about-content'>國立喵喵大學特聘講師及榮譽校友</p><h2 class='about-h2'>學歷</h2><p class='about-content'>英國哈喵大學 / 喵行為學系博士畢業</p><p class='about-content'>國立喵喵大學 / 喵行為學系碩士畢業</p><p class='about-content'>國立喵喵大學 / 喵喵心理系學士畢業</p></div>",
        },
        {
          id: 3,
          image: sakkaIntro,
          content:
            "<p class='about-content'>薩卡出生於澳洲附近的海域，隨著洋流去過很多地方，某天在躲避掠食者的攻擊時，努力的一躍跳上了岸，發現自己竟然可以在空氣中自由呼吸，於是薩卡開始了地面上的旅行。<br />風和日麗的某個夏天，薩卡走進了貓咪咖啡廳，馬上就被許多<span class='span-yellow'>世界上最可愛的生物們</span>包圍了，基於散播歡樂散播愛的理念，薩卡決定要將<span class='span-yellow'>貓貓的可愛</span>發揚光大。<br />「就從改善這個太平洋小島的貓貓權益開始吧！」於是薩卡戴上了貓耳，決心參選下一屆立委！</p>",
        },
      ],
    };
  },
};
</script>
<style scoped>
.Intro_div {
  width: 100%;
  height: 550px;
  display: flex;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  justify-content: space-between;
  .Intro_Img,
  .Intro_Content {
    box-sizing: border-box;
    max-width: fill-available;
    overflow: auto;

    width: 50%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;

    margin: 0;
    img {
      object-fit: contain;
      height: 100%;
      width: 90%;
      margin: auto;
      display: block;
      border-radius: 30px;
    }
  }
  .Intro_Img {
    padding: 0;
  }
  .Intro_Content {
    padding: 5%;
  }
}
</style>
