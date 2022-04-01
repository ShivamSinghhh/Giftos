function navbar() {
  return `<div class="navbar">
    <ul id="menuItems">
      <li><a href="index.html">HOME</a></li>
      <li><a href="#">SHOP</a></li>
      <li><a href="#">WHY US</a></li>
      <li><a href="#">TESTIMONIAL</a></li>
      <li><a href="contact.html" >CONTACT US</a></li>
      <li><a href="account.html">LOGIN</a></li> 
      <li><img src="./images/cart.png" id="cartLogo" alt="cart-image"></li>  
      
      <li><input type="text" placeholder="search"></li>  

    </ul>
    <div> <img src="./images/menu.png" class="menu-icon" id="menutoggle"></div> 
    
  </div>`
}



//-------------menu toggle-------------------//
function menuToggle() {

  if (menuItems.style.maxHeight === "0px") {
    menuItems.style.maxHeight = "max-content";
    menuItems.style.display = "block";
  } else {
    menuItems.style.maxHeight = "0px";
    menuItems.style.display = "none";

  }
}




export { navbar, menuToggle };