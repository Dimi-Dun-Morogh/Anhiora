const menuItemLi = document.querySelectorAll('.header__menu-item');
menuItemLi.forEach(li=>{
  console.log(li)
  li.firstElementChild.addEventListener('click',(e)=>{
menuItemLi.forEach(li=>{
  li.firstElementChild.classList.remove('a-active');
})
console.log(e.target)
e.target.classList.add('a-active')

  })
})


$(function(){
  //slider
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
  //tabs
  $( "#tabs" ).tabs();
  //progress bars
  let  createBar = (selector,value)=> {
    $(selector).css("width",value)
    $(selector).html(`<span>${value}</span>`)
  };
  createBar("#progress-1","80%");
  createBar("#progress-2","30%");
  createBar("#progress-3","70%");
  createBar("#progress-4","60%");
  // Scroll-anchor animation
  $(".content, .contacts, .footer", ).on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 900);
  });
  $("form").on("submit", function (e) {
    e.preventDefault();
  })
});