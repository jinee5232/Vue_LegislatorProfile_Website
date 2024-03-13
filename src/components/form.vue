<template lang="">
  <div class="form-style">
    <img
      class="btn-close"
      src="../assets/images/01_homepage/exit.png"
      @click="closeform"
    />
    <div class="mailbox-form2">
      <h2 class="hp-h2">民眾服務信箱</h2>
      <form action="#">
        <p>您的姓名：</p>
        <input class="input" type="text" placeholder="  ex. 喵喵喵" />

        <p>您的Email：</p>
        <input
          class="input"
          type="email"
          placeholder="  ex. meowmeow@meow.com"
        />

        <p>您的手機：</p>
        <input class="input" type="tel" placeholder="  ex. 0912-345-678" />

        <p>您的建言：</p>
        <textarea
          class="input2"
          type="text"
          placeholder=" ex. 我覺得某活動某個地方可以改善..."
        ></textarea>

        <input class="btn-mailbox" type="submit" value="確認送出" />
      </form>
      <img
        class="img-mailbox"
        src="../assets/images/01_homepage/sent_ message.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
    const closeForm = inject("closeForm");
    const closeform = () => {
      closeForm();
    };
    return {
      closeform,
    };
  },
};
</script>
<style scoped>
.form-style {
  position: relative;
  width: 1360px;
  height: 80vh;
  border-radius: 15px;
  /* top: 10%; */
  overflow-y: scroll;
  padding: 30px;
  z-index: 120;
  margin: auto;
  background-color: #fff;
}
.form-style::-webkit-scrollbar {
  display: none;
}

.btn-close {
  width: 25px;
  height: auto;
  position: absolute;
  border: none;
  color: #525252;
  top: 30px;
  right: 30px;
  z-index: 100;
  cursor: pointer;
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
</style>
