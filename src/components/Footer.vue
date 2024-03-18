<template>
  <div class="footer-container">
    <div class="footer">
      <div>
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <div class="footer-a">
        <div class="section-b">
          <div>
            <a>最新活動</a>
            <a>議題政策</a>
          </div>
          <div>
            <a>民眾服務</a>
            <a>小額捐款</a>
          </div>
        </div>
      </div>

      <div class="footer-b">
        <div class="b-content">
          <p>喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
          <p href="tel:+88628885678">(02) 888-5678</p>
          <p href="mailto:meowoffice@linmeow.com">meowoffice@linmeow.com</p>
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
  padding: 10px;
}

.footer {
  display: flex;
  width: 100%;
  height: auto;
  background-color: #ffeadd;

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
  flex-wrap: wrap;
  justify-content: start;
  text-align: center;
  flex-direction: column;

  color: #484848;
}

.footer-b {
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  color: #484848;
}

.b-content {
  display: flex;
}

.section-a {
  justify-content: center;
  margin: auto;
  font-size: 30px;
  font-weight: bold;
}

.section-b a {
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
}
@media screen and (min-width: 1200px) {
  .footer-a {
    width: 40%;
    margin: 20px;
  }
  .section-b a {
    line-height: 50px;
  }
  .footer-b {
    width: 40%;
    margin: 20px;
    .b-content {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .copyright {
    margin: 15px auto;
  }
}
@media (max-width: 1200px) {
  .footer img {
    width: 200px;
  }
  .section-b a {
    display: inline-block;
  }
  .footer-a {
    width: 40%;
    margin: 20px;
    justify-content: center;
    .section-b a {
      line-height: 50px;
    }
  }
  .footer-b {
    width: 40%;
    .b-content {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .copyright {
    margin: 15px auto;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .footer {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 25px;
  }
  .footer img {
    width: 200px;
  }

  .footer-a {
    width: 50%;
    margin: 0px;
    .section-b {
      display: flex;
      justify-content: center;
      line-height: 20px;
      a {
        line-height: 20px;
      }
    }
  }
  .footer-b {
    width: 100%;
    margin: 0px;
    .b-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .copyright {
    margin: 10px auto;
  }
}
@media (max-width: 768px) {
  .footer {
    flex-direction: row;
  }
  .footer img {
    width: 100px;
  }
  .footer-a {
    display: none;
  }
  .footer-b {
    width: 60%;
    padding: 0px;
    .b-content {
      flex-direction: column;
      justify-content: flex-start;
    }
    p {
      font-size: 16px;
      margin: 5px 5px 10px;
    }
  }
  .copyright {
    margin: 0px auto;
    font-size: 14px;
  }
}
</style>
