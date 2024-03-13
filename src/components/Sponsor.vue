<template>
  <div class="form-style">
    <img
      class="btn-close"
      @click="closeSponer"
      src="../assets/images/01_homepage/exit.png"
    />
    <div>
      <h1>小額捐款</h1>
      <div class="now">
        <div>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line1"></div>
        </div>
        <div class="now-text">
          <p class="now-p">目前小額贊助總金額</p>
          <p class="now-number" data-123="987,655,873">987,655,873</p>
          <p class="now-p">\ 薩卡感謝您 /</p>
        </div>
        <div>
          <div class="line3"></div>
          <div class="line4"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>
    <div class="donate-img">
      <img class="imgSrc" v-show="imgSrc === 0" :src="level0" alt="" />
      <img class="imgSrc" v-show="imgSrc === 1" :src="level1" alt="" />
      <img class="imgSrc" v-show="imgSrc === 2" :src="level2" alt="" />
      <img class="imgSrc" v-show="imgSrc === 3" :src="level3" alt="" />
    </div>
    <div class="donate">
      <div class="donate-con1" v-for="todo in donatItem" :key="todo.id">
        <div class="donate-plan hover1" @mouseover="changeImage(todo.id)">
          <p class="donate-level"><span>喵</span>{{ todo.title }}</p>
          <br />
          <p class="donate-amount" :id="todo.newid">{{ todo.cost }}</p>
          <input v-if="todo.other" type="number" placeholder=" 請輸入數字" />
          <br />
          <div class="donate-people">
            <div class="rounded"></div>
            <p>
              已有<span>{{ todo.person }}</span
              >人贊助
            </p>
          </div>
          <img src="../assets/images/06_donate/gradient.png" alt="" />
        </div>
      </div>
    </div>
    <div class="donate-notion">
      <div>
        <h2>捐贈者注意事項</h2>
      </div>
      <div>
        <ol>
          <li>捐款人必須為本國國民且具有選舉權。</li>
          <li>
            請註明捐款人姓名、身分證字號、電話，以及收件人地址，以便寄發收據。
          </li>
          <li>任何人不得以本人以外之名義捐贈。</li>
          <li>匿名捐贈不得超過新台幣1萬元。</li>
          <li>
            個人對同一擬參選人每年捐贈總額不得超過新台幣10萬元；對不同擬參選人每年捐贈總額合計不得超過新台幣30萬元。
          </li>
          <li>
            營利事業對同一擬參選人每年捐贈總額不得超過新台幣100萬元；對不同擬參選人每年捐贈總額合計不得超過新台幣200萬元。
          </li>
          <li>
            個人於申報所得稅時，捐款金額可作為列舉扣除額；每申報戶最高為綜合所得額20%，且上限為新台幣20萬元。
          </li>
          <li>
            營利事業於申報所得稅時，捐款金額可作為當年度費用或損失，不適用所得稅法第三十六條規定；其可減除金額不得超過所得額10%，其總額並不得超過新台幣50萬元。
          </li>
          <li>其他規定請參閱政治獻金法或監察院網站。</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import level0 from "../assets/images/06_donate/donate_1.png";
import level1 from "../assets/images/06_donate/donate_2.png";
import level2 from "../assets/images/06_donate/donate_3.png";
import level3 from "../assets/images/06_donate/donate_4.png";
import { inject } from "vue";
export default {
  data() {
    return {
      imgSrc: 0,
      level0,
      level1,
      level2,
      level3,
      donatItem: [
        {
          id: 0,
          img: level0,
          title: "星人之友",
          cost: "NTD $ 600",
          person: 9957,
          newid: "",
          other: false,
        },
        {
          id: 1,
          img: level1,
          title: "星大使",
          cost: "NTD $ 6,000",
          newid: "",
          person: 2000,
          other: false,
        },
        {
          id: 2,
          img: level2,
          title: "星傳奇",
          cost: "NTD $ 60,000",
          newid: "",
          other: false,
          person: 999,
        },
        {
          id: 3,
          img: level3,
          title: "星大法好",
          cost: "NTD $ ",
          newid: "amount",
          other: true,
          person: 168,
        },
      ],
    };
  },
  setup() {
    const closeSpon = inject("closeSpon");
    const closeSponer = () => {
      closeSpon();
    };
    return {
      closeSponer,
    };
  },
  methods: {
    changeImage(img) {
      this.imgSrc = img;
    },
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
/* 小額捐款表單樣式 */
/* 表頭樣式開始 */
h1 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 10%;
  color: #307cae;
  text-align: center;
  margin: 10px;
}

.now {
  display: flex;
  align-items: center;
  justify-content: center;
}

.now-p {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 10px;
}

.donate-p {
  font-size: 16px;
  font-weight: 600;
  color: #484848;
  text-align: center;
  margin: 10px;
}

.now-text {
  margin: 0 100px;
}

.now-number {
  font-size: 24px;
  font-weight: 600;
  color: #ff6666;
  z-index: 0;
  text-align: center;
}

.now-number::before {
  /* 複製一份 */
  content: attr(data-123);
  position: absolute;
  z-index: -1;
  -webkit-text-stroke: 3px #faf2d3;
}

.line1 {
  /* background-color: #F4E869; */
  background: linear-gradient(
    to right,
    rgba(244, 232, 105, 1),
    rgba(244, 232, 105, 0)
  );
  width: 250px;
  height: 3px;
}

.line2 {
  /* background-color: #F4E869; */
  background: linear-gradient(
    to right,
    rgba(244, 232, 105, 1),
    rgba(244, 232, 105, 0)
  );
  width: 250px;
  height: 20px;
  margin: 1px 0;
}

.line3 {
  /* background-color: #F4E869; */
  background: linear-gradient(
    to right,
    rgba(244, 232, 105, 0),
    rgba(244, 232, 105, 1)
  );
  width: 250px;
  height: 3px;
}

.line4 {
  /* background-color: #F4E869; */
  background: linear-gradient(
    to right,
    rgba(244, 232, 105, 0),
    rgba(244, 232, 105, 1)
  );
  width: 250px;
  height: 20px;
  margin: 1px 0;
}

/* 表頭樣式結束 */
.donate-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.donate {
  display: flex;
  width: 800px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}

.donate-plan {
  position: relative;
  width: 250px;
  height: 125px;
  border: 1px solid #141414;
  border-radius: 55px 5px 5px 5px;
  margin: 0 20px;
  z-index: 2;
}

.donate-plan img {
  position: absolute;
  width: 250px;
  height: auto;
  top: 5px;
  left: 5px;
  display: none;
  z-index: -1;
}

.donate-plan:hover > img {
  display: block;
}

.donate-plan:hover > .donate-level > span {
  color: #5e1acd;
}

.donate-plan:hover > .donate-amount {
  color: #fff;
  text-shadow: 1px 1px #307cae;
}

.donate-plan:hover > .donate-people > p > span {
  color: #307cae;
  font-weight: 600;
}

.donate-plan:hover > .donate-people > .rounded {
  background-color: #fff;
}

/* 贊助方案內文 start */

.donate-level {
  color: #141414;
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0 0 20px;
}

.donate-amount {
  color: #141414;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 15%;
  margin: 0 0 0 22px;
}

.donate-people {
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 20%;
  margin: 0 0 0 80px;
  display: flex;
}

.rounded {
  width: 0.8em;
  height: 0.8em;
  background-color: #c1c1c1;
  border-radius: 50px;
  margin: 0px 5px;
}

.donate-plan input {
  width: 120px;
  height: 20px;
  color: #8f8f8f;
  font-size: 16px;
  font-weight: 500;
  background-color: #d9d9d9;
  outline-style: none;
  border: none;
  border-radius: 26px;
  margin: 10px 0 10px 5px;
}

/* .donate-plan span {
  color: #307CAE;
} */
/* 贊助方案內文 end */

.donate-img {
  width: 450px;
  height: 300px;
  object-fit: cover;
  object-position: 50% 50%;
  margin: 0 auto;
}

.donate-con1 {
  display: flex;
  padding: 20px 0px;
  margin: 0 auto;
}

.donate-con2 {
  display: flex;
  padding: 20px 0px;
  margin: 0 auto;
}

#amount {
  display: inline;
}

/* 捐款說明文字 */
.donate-notion {
  margin: 0 auto 20px auto;
  width: 700px;
}

.donate-notion div {
  width: 100%;
}

.donate-notion h2 {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 10%;
  color: #307cae;
  text-align: center;
  margin: 30px 0;
}

/* CSS reset後，ol的序號會不見 */
/* 要設置list-style-type: decimal; list-style-position: inside;*/
/* 但換行未對齊，將list-style-position改為outside */

.donate-notion li {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #141414;
  line-height: 28px;
  list-style-type: decimal;
  list-style-position: outside;
}
</style>
