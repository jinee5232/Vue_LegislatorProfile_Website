<template lang="">
  <div class="article_div">
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
        src="../assets/images/01_homepage/airplane1.png"
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
</template>
<script>
export default {};
</script>
<style scoped>
.article_div {
  width: 100%;
  height: 800px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
  /* background-color: #5E1ACD; */
}
.mailbox_bg {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.cls-1 {
  fill: none;
  stroke: black;
  stroke-dasharray: 0 0 10 10;
  stroke-linejoin: round;
  stroke-opacity: 0.5;
  stroke-width: 5px;
}
.plane {
  position: absolute;
  top: -350px;
  left: -15px;
  z-index: -2;
  cursor: pointer;
}

.planefly {
  cursor: pointer;
  offset-path: path(
    "M6.41,19.69S335.34-22.48,546.26,271.33c77.41,108.74,140.92,258.28,395.89,232.32s304.48-38.42,408.26,.04"
  );
  animation: motion-move 3s ease-in-out 0s 1 alternate forwards;
}

.plane:hover {
  transform: scale(1.2);
}

.plane2 {
  offset-path: path(
    "M1350.41,503.69s107.59,53.2,208.59-43.8,167-124,224-127,267,14,310-17"
  );
  animation: motion-move2 2000ms ease-in-out 0s 1 alternate forwards;
  /* 2 */
}
/* ,.mailbox-title */
.demand-title,
.mailbox-title,
.news-title {
  position: relative;
  top: 100px;
  opacity: 0;
}
/* ,.mailbox-container */
.mailbox-container {
  position: relative;
}
/* 意見信箱樣式 */
.mailbox-form2 {
  position: relative;
  z-index: 2;
}

.mailbox-form2 form {
  /* position: absolute; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;
  display: flex;
}

.mailbox-form2 .hp-h2 {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 10%;
  color: #307cae;
  margin: 0;
  display: block;
  text-align: center;
}

.mailbox-form2 .input {
  width: 600px;
  height: 67px;
  background-color: #7bc2e9;
  opacity: 0.7;
  outline-style: none;
  border: none;
  border-radius: 20px;
  font-size: 24px;
  color: #141414;
  margin: 25px 0;
}

.mailbox-form2 .input::placeholder,
.mailbox-form2 .input2::placeholder {
  color: #141414;
}

.mailbox-form2 .input2 {
  width: 600px;
  height: 328px;
  background-color: #7bc2e9;
  opacity: 0.7;
  outline-style: none;
  border: none;
  border-radius: 25px;
  font-size: 24px;
  color: #141414;
  margin: 25px 0;
}

.mailbox-form2 p {
  justify-content: center;
  display: inline;
  width: 150px;
  font-size: 24px;
  font-weight: 600;
  color: #55a8d4;
  margin: 25px 0;
  line-height: 69px;
}

.btn-mailbox {
  width: 167px;
  height: 55px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  background-color: #ff6666;
  outline-style: none;
  border: none;
  border-radius: 39px;
  margin: 0 25px 0 auto;
}

.img-mailbox {
  position: absolute;
  width: 1000px;
  top: 30%;
  left: -15%;
  z-index: -1;
  opacity: 0.5;
}
@keyframes motion-move {
  from {
    offset-distance: 5%;
    z-index: -2;
  }
  to {
    offset-distance: 90%;
    z-index: 2;
  }
}
</style>
