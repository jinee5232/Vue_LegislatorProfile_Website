<template>
  <!-- :class="[scrollPosition >= 120 ? 'shrink' : 'isTop']" -->
  <div class="header" :class="[scrollPosition >= 120 ? 'shrink' : 'isTop']">
    <div class="wrap">
      <div class="logo">
        <router-link to="/Vue_LegislatorProfile_Website/">
          <img class="header-logo" src="../assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/Vue_LegislatorProfile_Website/">首頁</router-link>
          </li>
          <li @click="scrollToSection('About')"><a>關於薩卡</a></li>
          <li @click="scrollToSection('Activy')"><a>政治議題</a></li>
          <li @click="scrollToSection('News')"><a>最新活動</a></li>
        </ul>
        <div class="SponerBtn" @click="OpenSponer">
          <div class="icon_money">$</div>
          <a>小額捐款</a>
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
.header .wrap {
  transition: all 0.5s ease-out;
}
.pageContainer {
  padding-top: 135px;
}
@media (max-width: 64em) {
  .pageContainer {
    padding-top: 60px;
  }
}
.wrap {
  max-width: 68.75em;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 68.75em) {
  .wrap {
    padding-left: 20px;
    padding-right: 20px;
  }
}
body a {
  text-decoration: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
}
.header.isTop {
  box-shadow: 0 0 0 transparent;
}
.header.isTop .wrap {
  height: 135px;
}
@media (max-width: 64em) {
  header.isTop .wrap {
    height: 60px;
  }
}

@media (max-width: 111.25em) {
  header .wrap {
    padding-left: 20px;
    padding-right: 20px;
  }
}
header nav {
  flex-grow: 1;
  display: flex;
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
  display: flex;
  margin-left: 40px;
  border-radius: 30px;
  padding: 5px 20px;
  background-color: #e9545d;
  color: #ffffff;
  font-size: 32px;
  height: 50px;
  font-weight: 600;
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
@media (max-width: 64em) {
  .header .socialList {
    display: none;
  }
}
@media (min-width: 75.0625em) {
  .header .socialList > li + li {
    margin-left: 0.9375em;
  }
}
@media (max-width: 75em) {
  .header .socialList > li + li {
    margin-left: 0.125em;
  }
}
.logo img {
  width: 200px;
  opacity: 0;
}
.logo img {
  transform: translate(0);
  opacity: 1;
}
.logo img {
  transition-delay: 0.3s;
}

@media (min-width: 25.0625em) {
  .logo a:after {
    margin-left: 12px;
    padding-bottom: 2px;
    color: #939293;
  }
}
.wrap {
  max-width: 68.75em;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 68.75em) {
  .wrap {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 64em) {
  .header.isTop .wrap {
    height: 60px;
  }
}
.header .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 111.25em;
  height: 80px;
}

.logo img {
  width: 50%;
  height: auto;
}
.menu {
  display: flex;
  justify-content: center;
}
@media (max-width: 64em) {
  .menu {
    display: none;
  }
}
.menu > li {
  position: relative;
}
.menu > li + li {
  padding-left: 50px;
}
@media (max-width: 82.5em) {
  .menu > li + li {
    padding-left: 20px;
  }
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

@media (max-width: 82.5em) {
  .menu > li + li:before {
    left: 10px;
  }
}
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
@media (min-width: 64.0625em) {
  .menuOpenBtn {
    display: none;
  }
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
</style>
