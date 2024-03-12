<template lang="">
  <div class="dialog_article">
    <div>
      <div class="dialog_btn">
        <div
          class="Dbtn"
          type=""
          @click="changeContent(1)"
          :class="[selectedContent.id === 1 ? 'btn_BGC ' : 'btn_BG']"
        >
          我的主張
        </div>
        <div
          class="Dbtn"
          type=""
          @click="changeContent(2)"
          :class="[selectedContent.id === 2 ? 'btn_BGC ' : 'btn_BG']"
        >
          經歷背景
        </div>
        <div
          class="Dbtn"
          type=""
          @click="changeContent(3)"
          :class="[selectedContent.id === 3 ? 'btn_BGC ' : 'btn_BG']"
        >
          薩卡的起源
        </div>
        <div class="dialog_info">
          <div class="img_position">
            <img class="Info_cont" :src="Info_box" alt="" />
            <img
              class="Info_fish"
              src="../assets/images/02_about/about_small.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Introduction :selectedContent="selectedContent"></Introduction>
    </div>
  </div>
</template>
<script>
import Info01 from "../assets/images/02_about/info_01.png";
import Info02 from "../assets/images/02_about/info_02.png";
import Info03 from "../assets/images/02_about/info_03.png";
import Introduction from "../components/Introduction.vue";
export default {
  components: {
    Introduction,
  },
  data() {
    return {
      Info_box: Info01,
      selectedContent: {
        id: 1, // 默认选择 id 为 1 的内容
      },
    };
  },
  methods: {
    changeContent(id) {
      this.selectedContent.id = id;
      if (id === 1) {
        this.Info_box = Info01;
      } else if (id === 2) {
        this.Info_box = Info02;
      } else {
        this.Info_box = Info03;
      }
    },
  },
};
</script>
<style scoped>
.dialog_article {
  max-width: 1440px;
  height: 650px;
  margin: 0 auto;
  display: flex;
  width: 90vw;
  flex-direction: column;
  .dialog_btn {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    .Dbtn {
      z-index: 2;
      width: 32%;
      height: 90px;
      font-size: 32px;
      border-radius: 30px 30px 0px 0px;
      line-height: 80px;

      text-align: center;
    }
  }
}
.btn_BG {
  background-color: #fff;
  color: #ff6666;
  &:hover {
    background-color: #ff6666;
    color: #fff;
  }
}

.btn_BGC {
  background-color: #ff6666;
  color: #fff;
}
.dialog_info {
  position: absolute;
  width: 400px;
  height: 150px;
  display: flex;
  right: 10px;
  top: -120px;
  .img_position {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      height: 100px;
      width: auto;
    }
    .Info_fish {
      right: 0;
      top: 50px;
    }
    .Info_cont {
      left: 0;
      top: 0;
    }
  }
}
</style>
