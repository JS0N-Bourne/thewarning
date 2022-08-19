class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <img class="logo" src="images/warning_logowht.png" alt="logo">
      <nav>
        <ul class="nav_links">
          <li><a href="#news">NEWS</a></li>
          <li><a href="#music">MUSIC</a></li>
          <li><a href="#tour">TOUR</a></li>
          <li><a href="#videos">VIDEOS</a></li>
          <li><a href="#merch">STORE</a></li>
        </ul>
      </nav>
      <div class="nav_social"> 
      <a href="https://www.facebook.com/TheWarningRockBand" class="face_icon"><img src="images/logos/facebook.png"></a>
      <a href="https://www.instagram.com/thewarningrockband/?hl=en" class="insta_icon"><img src="images/logos/instagram.png"></a>
      <a href="https://twitter.com/thewarningband2?lang=en" class="twit_icon"><img src="images/logos/twitter.png"></a>
      <a href="https://open.spotify.com/artist/2SmW1lFlBJn4IfBzBZDlSh" class="spot_icon"><img src="images/logos/spotify.png"></a>
      <a href="https://www.youtube.com/channel/UCeZHVOA5rP9rHoa7zKCx7kQ" class="yout_icon"><img src="images/logos/youtube.png"></a>
      <a href="https://www.tiktok.com/@thewarningrockband?lang=en" class="tik_icon"><img src="images/logos/tiktok.png"></a>

      </div>
      </header>
    `
  }
}

customElements.define('nav-bar', NavBar)