<template lang="">
  <div class="form-style">
    <img
      class="btn-close"
      src="../assets/images/01_homepage/exit.png"
      @click="closeform"
    />

    <h2 class="form-titleZ">民眾服務信箱</h2>
    <div class="mailbox-form2">
      <form action="#">
        <div>
          <label for="name">姓名：</label>
          <input
            class="input input1"
            type="text"
            placeholder="Ex:喵喵喵"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='喵喵喵'"
          />
        </div>
        <div>
          <label for="name">Email：</label>
          <input
            class="input input1"
            type="email"
            placeholder="Ex:meowmeow@meow.com"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Ex:meowmeow@meow.com'"
          />
        </div>
        <div>
          <label for="phone">手機：</label>
          <input
            class="input input1"
            type="tel"
            placeholder="Ex:0912-345-678"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Ex:0912-345-678'"
          />
        </div>
        <div>
          <label for="advice">建議：</label>
          <textarea
            class="input input2"
            type="text"
            placeholder="Ex:我覺得某活動..."
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Ex:我覺得某活動...'"
          ></textarea>
        </div>

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
  text-align: center;
  width: 1360px;
  height: 80vh;
  border-radius: 15px;
  /* top: 10%; */
  overflow: hidden;
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  display: flex;
  label {
    margin: 0;
    margin-left: 10px;
    padding: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    text-align: left;
  }
}

.form-titleZ {
  font-size: 48px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 10%;
  color: #307cae;
  margin-bottom: 30px;
  margin: 0 auto;
  margin-bottom: 30px;

  position: relative;
  &::before {
    position: absolute;
    contain: "";
    width: 100%;
    height: 5px;
    bottom: -5px;
    background-color: #b3b3b3;
    transform-origin: center;
    right: 0;
    left: 0;
    content: "";
  }
}

.mailbox-form2 .input {
  width: 100%;
  background-color: #e7e7e7;
  opacity: 0.9;
  padding: 5px 0;
  outline-style: none;
  border: none;
  border-radius: 20px;
  font-size: 24px;
  color: #141414;
  text-indent: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px inset;
  /* margin: 25px 0; */
}
.input1 {
  height: 67px;
}
.input2 {
  height: 328px;
}
.mailbox-form2 .input::placeholder {
  color: #141414;
}

.mailbox-form2 label {
  justify-content: center;
  display: inline;

  font-size: 24px;
  font-weight: 600;
  color: #505050;
  line-height: 40px;
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
  border-radius: 10px;
  margin-left: auto;
}

.img-mailbox {
  position: absolute;
  width: 1000px;
  top: 10%;
  left: -20%;
  z-index: -1;
  opacity: 0.5;
}
@media screen and (min-width: 1200px) {
}
@media (max-width: 1200px) {
}
@media (min-width: 769px) and (max-width: 992px) {
}
@media (max-width: 768px) {
  .mailbox-form2 form {
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    label {
      font-size: 24px;
      line-height: 30px;
    }
    .input {
      font-size: 16px;
      font-weight: 600;
      text-indent: 15px;
      border-radius: 10px;
    }
    .input1 {
      height: 50px;
    }
    .input2 {
      height: 300px;
    }
  }
  .form-titleZ {
    font-size: 32px;
  }
}
</style>
