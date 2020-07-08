const menuItemLi = document.querySelectorAll('.header__menu-item');
menuItemLi.forEach(li=>{
  li.firstChild.addEventListener('click',(e)=>{
menuItemLi.forEach(li=>{
  li.firstChild.classList.remove('a-active');
})
e.target.classList.add('a-active')

  })
})

//slider
$(function(){

  $(".slider").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          // arrows: false,
          // slidesToShow: 3,
          dots: false,
        }
      },
    ]
  });
});