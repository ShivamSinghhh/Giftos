function navbar(){
    return `<div class="navbar">
    <ul id="menuItems">
      <li class="active"><a href="index.html">HOME</a></li>
      <li><a href="#">SHOP</a></li>
      <li><a href="#">WHY US</a></li>
      <li><a href="#">TESTIMONIAL</a></li>
      <li><a href="contact.html">CONTACT US</a></li>
      <li><a href="account.html">LOGIN</a></li>         
    </ul>
    <div><img src="/images/cart.png" id="cartLogo" alt="cart-image"></div>
    <div><input type="text" placeholder="search"></div>
    <img src="./images/menu.png" class="menu-icon" id="menutoggle">
  </div>`
}



//-------------menu toggle-------------------//
function menuToggle() { 

    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}




export {navbar,menuToggle};