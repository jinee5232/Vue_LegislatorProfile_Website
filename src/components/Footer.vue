<template>
  <div class="footer-container">
    <div class="footer">
      <div>
        <img src="./images/logo.png" alt="" />
      </div>

      <div class="footer-a">
        <div class="section-b">
          <a href="./03_activity.html">最新活動</a>
          <a href="./04_policy.html">議題政策</a>
          <br />
          <a href="#">民眾服務</a>
          <a href="#">小額捐款</a>
        </div>
      </div>

      <div class="footer-b">
        <div class="b-content">
          <p>喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
          <br />
          <a href="tel:+88628885678">(02) 888-5678</a><br />
          <a href="mailto:meowoffice@linmeow.com">meowoffice@linmeow.com</a>
        </div>
      </div>
    </div>
    <hr />
    <div class="footer-copyright">
      <p class="copyright">&copy; 2023 喵薩卡 版權所有</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-container {
  background-color: #ffeadd;
}

.footer {
  display: flex;
  height: 150px;
  background-color: #ffeadd;
  padding: 25px;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  color: #484848;
}

.footer img {
  width: 250px;
  height: auto;
  margin: 20px;
}

.footer-a {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  color: #484848;
}

.footer-b {
  display: flex;
  width: 40%;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  color: #484848;
}

.b-content {
  margin: 30px 20px;
  align-items: flex-start;
}

.section-a {
  justify-content: center;
  margin: 25px 10px;
  font-size: 30px;
  font-weight: bold;
}

.section-b a {
  display: inline-block;
  align-content: flex-start;
  font-size: 20px;
  font-weight: bold;
  margin: 15px 10px;
  color: #484848;
}

.footer-b p {
  display: inline;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 5px 10px;
  color: #484848;
}

.footer-b a {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 5px 5px;
  color: #484848;
}

hr {
  size: 8px;
  align-items: center;
  width: 80%;
  border-color: #307cae;
}

.footer-copyright {
  text-align: center;
}

.copyright {
  display: inline-block;
  font-size: 18px;
  align-items: center;
  margin: 15px auto;
}
</style>
