<!-- This is the large image i have used behind my nav -->
<div class="mainImg">
  <div class="navPos">
    <!-- The following code is for my mobile hidden nav bar which is set to display none untill a certain width -->
    <input type="checkbox" id="hamburger-input" class="burger-shower" />
    <label id="hamburger-menu" for="hamburger-input">
      <nav id="sidebar-menu">
        <h3>Menu</h3>
        <ul>
          <li><a href="/" target="_self">Home</a></li>
          <li><a href="/Drinks" target="_self">Drink List</a></li>
          <li><a href="/Gallery" target="_self">Gallery</a></li>
          <h4>EXIT</h4>
        </ul>
      </nav>
    </label>

    <!-- This is the navbar that is visible on the majority of the pages an spans aross the page -->
    <div class="topnav">
      <img src="/img/logo.svg" class="logo" alt="This is an image of my logo" />
      <a href="/">Home</a>
      <a href="/Drinks">Drink List</a>
      <a href="/Gallery">Gallery</a>
    </div>

    <div class="overlay" />
  </div>
</div>
