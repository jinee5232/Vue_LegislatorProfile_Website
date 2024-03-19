<template>
  <!-- :class="[scrollPosition >= 120 ? 'shrink' : 'isTop']" -->
  <v-app>
    <div class="header" :class="[scrollPosition >= 120 ? 'shrink' : 'isTop']">
      <div class="wrap">
        <router-link to="/Vue_LegislatorProfile_Website/">
          <img
            class="meow-logo"
            src="../assets/images/logo.png"
            alt=""
            :class="[scrollPosition >= 120 ? 'header-logo' : 'logoHigh']"
          />
        </router-link>

        <nav>
          <ul class="menu">
            <li>
              <router-link to="/Vue_LegislatorProfile_Website/"
                >首頁</router-link
              >
            </li>
            <li @click="scrollToSection('About')"><a>關於薩卡</a></li>
            <li @click="scrollToSection('Activy')"><a>政治議題</a></li>
            <li @click="scrollToSection('News')"><a>最新活動</a></li>
          </ul>
          <div class="SponerBtn" @click="OpenSponer">
            <div class="icon_money">$</div>
            <a class="icon_word">小額捐款</a>
          </div>
        </nav>

        <!-- <ul class="socialList">
        <li>
          <a href="#" class="fb" title="Facebook" target="_blank"
            ><i><font-awesome-icon :icon="['fab', 'facebook-f']" /></i
          ></a>
        </li>
        <li>
          <a href="#" class="fb" title="Instragram" target="_blank"
            ><li><font-awesome-icon :icon="['fab', 'instagram']" /></li
          ></a>
        </li>
        <li>
          <a href="#" class="fb" title="Youtube" target="_blank"
            ><li><font-awesome-icon :icon="['fab', 'youtube']" /></li
          ></a>
        </li>
        <li>
          <a href="#" class="fb" title="Telegram" target="_blank"
            ><li><font-awesome-icon :icon="['fab', 'telegram-plane']" /></li
          ></a>
        </li>
      </ul> -->
        <button type="button" class="menuOpenBtn"><span></span></button>
      </div>
    </div>
  </v-app>
</template>

<script>
import { inject } from "vue";
export default {
  data() {
    return {
      scrollPosition: 0, // 初始化滚动位置为 0
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 100;
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth",
        });
      }
    },
  },
  mounted() {
    // run the function when the component's mount
    window.addEventListener("scroll", this.updateScroll);
  },
  setup() {
    const openSpon = inject("openSpon");
    const OpenSponer = () => {
      openSpon();
    };
    return {
      OpenSponer,
    };
  },
};
</script>

<style scoped>
.menuOpenBtn:after,
.menuOpenBtn:before,
.menuOpenBtn span,
.menu a:before,
.slideMenu a:before,
.slideMenuBox,
body a,
footer .goTop svg,
.header,
.meow-logo,
.header .wrap {
  transition: all 0.5s ease-out;
}
.pageContainer {
  padding-top: 135px;
}

.menuOpenBtn {
  display: none;
}
.wrap {
  max-width: 68.75em;
  margin: 0 auto;
  height: 100%;
}

body a {
  text-decoration: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
}
.header.isTop {
  box-shadow: 0 0 0 transparent;
}

.header nav {
  flex-grow: 1;
  padding-right: 20px;
  justify-content: end;
  align-items: center;
}
/* @media (min-width: 75.0625em) {
  header .socialList:before {
    content: "資助我們";
    margin-right: 30px;
    color: #4a4ab1;
    cursor: pointer;
  }
} */
.SponerBtn {
  margin-left: 40px;
  border-radius: 30px;
  background-color: #e9545d;
  color: #ffffff;
  font-size: 32px;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
  .icon_money {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: auto;
    background-color: #fff;
    border-radius: 25px;
    color: #e9545d;
  }
  a {
    line-height: 50px;
    margin-left: 10px;
  }
  &:hover {
    background-color: #ed0101;
    .icon_money {
      color: #ed0101;
    }
  }
}

.header .wrap {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 111.25em;
  box-sizing: border-box;
}

/* .logo img {
  width: 50%;
  height: auto;
} */
.menu {
  display: flex;
  justify-content: center;
}

.menu > li {
  position: relative;
}
.menu > li + li {
  padding-left: 50px;
}

/* 斜線 */
/* .menu > li + li:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 25px;
  z-index: 1;
  width: 1px;
  height: 14px;
  margin-top: -6px;
  background-color: #9fa0a0;
  transform: rotate(30deg);
} */

.menu a {
  position: relative;
  display: block;
  padding: 10px 8px;
  color: #55a8d4;
  font-size: 32px;
  font-weight: 600;
}
.menu a.current,
.menu a:hover {
  color: #307cae;
}
.menu a.current:before,
.menu a:hover:before {
  right: auto;
  left: 0;
  width: 100%;
}
.menu a:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 0;
  height: 5px;
  background-color: #e9545d;
}
.socialList {
  display: flex;
  align-items: center;
}
.socialList a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #b3b3b3;
  background-color: #fff;
}
.socialList a:hover {
  color: #4974ae;
}
.menuOpenBtn {
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.menuOpenBtn.open span {
  width: 0;
}
.menuOpenBtn.open:before {
  transform: rotate(-45deg);
}
.menuOpenBtn.open:after {
  transform: rotate(45deg);
}
.menuOpenBtn:after,
.menuOpenBtn:before,
.menuOpenBtn span {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 24px;
  height: 2px;
  margin-left: -12px;
  margin-top: 0.5px;
  background-color: #4974ae;
}
.menuOpenBtn:after,
.menuOpenBtn:before {
  content: "";
}
.menuOpenBtn:before {
  transform: translateY(-8px);
}
.menuOpenBtn:after {
  transform: translateY(8px);
}

/* 主訴求 */
.header .demand {
  margin: 20px auto;
  font-size: 32px;
  display: flex;
  flex-direction: column;
}

.header h2 {
  margin: 100px auto 30px auto;
  font-size: 48px;
  font-weight: bold;
}

.header p {
  margin: 5px auto;
  font-size: 32px;
}

.header li {
  box-sizing: border-box;
  padding: 20px 0;
}

.header li img {
  width: 600px;
  height: 400px;
}

.timeline-box {
  width: 650px;
  height: 450px;
}

.intro {
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline li:nth-child(odd) {
  float: left;
  padding-right: 100px;
}

.timeline li:nth-child(even) {
  float: right;
  /* padding-left: 10px; */
  padding-left: 100px;
}

.timeline li::after {
  content: "";
  position: relative;
  width: 2px;
  height: 100%;
  background-color: #404040;
}
/* .timeline li:nth-child(odd) {
  padding-right: 100px;
} */
.isTop {
  padding: 20px 0;
}
.header.shrink {
  padding: 10px 0;
}
.header-logo {
  padding-left: 20px;
}
.logoHigh {
  padding-left: 20px;
}
@media screen and (min-width: 1200px) {
  .isTop {
    height: 135px;
  }
  .header nav {
    display: flex;
  }
  .SponerBtn {
    display: flex;
    padding: 5px 20px;
  }
  .header-logo {
    width: auto;
    height: 90px; /* 设置logo图片的高度为容器高度的百分比 */
  }
  .logoHigh {
    width: auto;
    height: 125px; /* 设置logo图片的高度为容器高度的百分比 */
  }
}
@media (max-width: 1200px) {
  .header nav {
    display: flex;
  }
  .isTop {
    height: 135px;
  }
  .SponerBtn {
    display: flex;
    padding: 5px 20px;
  }
  .menu > li + li {
    padding-left: 20px;
  }
  .header-logo {
    width: auto;
    height: 80px; /* 设置logo图片的高度为容器高度的百分比 */
  }
  .logoHigh {
    width: auto;
    height: 110px; /* 设置logo图片的高度为容器高度的百分比 */
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .header nav {
    display: flex;
  }
  .isTop,
  .wrap {
    height: 80px;
  }
  .SponerBtn {
    display: flex;
    padding: 5px 10px;
    a {
      display: none;
    }
  }
  .menu > li + li {
    padding-left: 10px;
  }
  .menu a {
    font-size: 28px;
  }
  .header-logo {
    width: auto;
    height: 60px; /* 设置logo图片的高度为容器高度的百分比 */
  }
  .logoHigh {
    width: auto;
    height: 80px; /* 设置logo图片的高度为容器高度的百分比 */
  }
}
@media (max-width: 768px) {
  .header nav {
    display: none;
  }
  .isTop,
  .wrap {
    height: 50px;
  }
  .header.menuOpenBtn {
    display: flex;
  }

  .header-logo {
    width: auto;
    height: 30px; /* 设置logo图片的高度为容器高度的百分比 */
  }
  .logoHigh {
    width: auto;
    height: 50px; /* 设置logo图片的高度为容器高度的百分比 */
  }
}
</style>
