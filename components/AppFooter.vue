<template>
  <footer>
    <div class="head"><span>Kasa</span> | Your home on the road</div>
    <div class="content">
      <div class="footer-col">
        <div class="footer-label">Cities</div>
        <ul>
          <li>Boston</li>
          <li>Chicago</li>
          <li>Los Angeles</li>
          <li>New York</li>
          <li>San Francisco</li>
          <li>Seattle</li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-label">Guests</div>
        <ul>
          <li>Book a Kasa</li>
          <li>Locations</li>
          <li>FAQ</li>
          <li>Guest Portal</li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-label">Kasa in your building</div>
        <ul>
          <li>For Landlords</li>
          <li>For Neighbors</li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-label">Company & Resources</div>
        <ul>
          <li>About Kasa</li>
          <li>We are hiring</li>
          <li>Contact</li>
          <li>Privacy & terms</li>
          <li>Accessability</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
    <div class="footer-footer">2020 - Kasa Living Inc.</div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  padding: 0 100px;
  padding-bottom: 20px;
  background: #f2f2f2;
  overflow: auto;
}
footer .head {
  padding: 50px 0;
}
footer .content {
  display: flex;
}
footer .footer-col {
  max-height: 300px;
  margin-right: 100px;
}
footer ul {
  list-style: none;
  padding: 0;
}
footer li {
  padding-bottom: 10px;
  display: inline-block;
}
footer-footer {
  margin-bottom: 50px;
}
</style>
