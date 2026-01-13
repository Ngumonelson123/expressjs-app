<nav class="navbar">
  <div class="brand">My Company</div>

  <ul class="nav-links">
    <li><a href="/" class="<%= title === 'Home' ? 'active' : '' %>">Home</a></li>
    <li><a href="/services" class="<%= title === 'Our Services' ? 'active' : '' %>">Our Services</a></li>
    <li><a href="/contact" class="<%= title === 'Contact Us' ? 'active' : '' %>">Contact us</a></li>
  </ul>
</nav>
