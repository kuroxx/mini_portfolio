var main = main = $('#main ul');

$('.scroll').click(function(event) {
        
    event.preventDefault();
 
    var full_url = this.href,
        parts = full_url.split('#'),
        trgt = parts[1],
        target_offset = $('#'+trgt).offset(),
        target_top = target_offset.top;
        
    $('html, body').animate({scrollTop:target_top}, 500);
    
    /* Remove active class on any li when an anchor is clicked */
    
    main.children().removeClass();
    
    /* Add active class to clicked anchor's parent li */
        
    $(this).parent().addClass('active');

});


// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}