let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

		$(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $('.navbar').addClass('sticky');
      }
      else{
      $('.navbar').removeClass('sticky');
      }
  
      });