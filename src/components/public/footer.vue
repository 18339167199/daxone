<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-12 col-xs-6">
          <div class="footer-widget">
            <a href="#">
              <img src="/static/images/logo/logo-1.png" />
            </a>
            <div class="footer-social">
              <span>Follow us:</span>
              <ul>
                <li>
                  <a href="#">
                    <i class="ali-icon ali-icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ali-icon ali-icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ali-icon ali-icon-weibo"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ali-icon ali-icon-qq"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12 col-xs-6">
          <div class="footer-widget">
            <div class="footer-title">
              <h3>USEFUL LINK</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li>
                  <a href="#">Shopping Cat</a>
                </li>
                <li>
                  <a href="#">WIshlist</a>
                </li>
                <li>
                  <a href="#">Chekout</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-2 col-12 col-xs-6">
          <div class="footer-widget">
            <div class="footer-title">
              <h3>ABOUT US</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-12 col-xs-6">
          <div class="footer-widget">
            <div class="footer-title">
              <h3>NEWSLETTER</h3>
            </div>
            <div class="footer-subscribe">
              <p>Subscribe to get all new updates</p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your @email"
                  aria-describedby="basic-addon1"
                />
                <span class="input-group-addon" id="basic-addon1">
                  <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scope>
#basic-addon1{
  cursor: pointer;
}
#basic-addon1:hover{
  color: #ff5151;
}
.footer {
  background: #f8f8f8;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  font-size: 15px;
  text-align: left;
}
.footer .footer-widget{
  margin: 10px;
}
.footer .footer-widget .footer-social{
  padding: 20px 10px 10px 10px;
}
.footer .footer-widget .footer-social ul li{
  display: inline-block;
  margin-right: 10px;
}
.footer .footer-widget .footer-title{
  margin-bottom: 25px; 
}
.footer .footer-widget .footer-list ul li{
  margin-bottom: 15px;
}
.footer a:hover{
  color: #ff5151;
}
</style>