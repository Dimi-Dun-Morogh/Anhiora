$(function () {
  //header selected  class toggle
  const menuItemLi = document.querySelectorAll(".header__menu-item");
  menuItemLi.forEach((li) => {
    console.log(li);
    li.firstElementChild.addEventListener("click", (e) => {
      menuItemLi.forEach((li) => {
        li.firstElementChild.classList.remove("a-active");
      });
      e.target.classList.add("a-active");
    });
  });

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
        },
      },
    ],
  });
  //tabs
  $("#tabs").tabs();
  //progress bars
  let createBar = (selector, value) => {
    $(selector).css("width", value);
    $(selector).html(`<span>${value}</span>`);
  };
  createBar("#progress-1", "80%");
  createBar("#progress-2", "30%");
  createBar("#progress-3", "70%");
  createBar("#progress-4", "60%");
  // Scroll-anchor animation
  $(".wrap-icon").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate(
      {
        scrollTop: top,
      },
      900,
    );
  });

  // Quotes block
  const quotes = {
    quoteArray: [
      "Suspendisse dictum quam tortor, et dapibus lacus. Quisque euismod lacus in mi consequat sed pulvinar elit ultricies. Nam eu ligula ut massa lobortis scelerisque. Curabitur at rhoncus quam.",
      "Nam eu ligula ut massa lobortis scelerisque. Curabitur at rhoncus quam.",
      "et dapibus lacus. Quisque euismod lacus in mi consequat sed pulvinar elit ultricies. Nam eu ligula ut massa lobortis scelerisque. Curabitur at rhoncus",
    ],
    index: 0,
    changeQuote: function () {
      if (this.index === this.quoteArray.length) this.index = 0;
      $(".content__about-us-item-body-quote").html("");
      $(".content__about-us-item-body-quote").html(this.quoteArray[this.index]);
      this.index++;
      console.log("hit");
    },
  };

  $(".content__about-us-item-head-btns").on("click", "a", function (event) {
    event.preventDefault();
    quotes.changeQuote();
    $(".content__about-us-item-body-quote").effect("slide", {
      easing: "linear",
      duration: "500",
    });
  });

  //teamBlock
  const teamMembers = {
    team: [
      {
        name: "Stojan Petrov",
        job: "manager",
        pic: false,
      },
      {
        name: "Ivelina Peeva",
        job: "client relations",
        pic: false,
      },
      {
        name: "Georgiy Stoychev",
        job: "sales",
        pic: false,
      },
      {
        name: "Milena Ivanova",
        job: "office manager",
        pic: false,
      },
      {
        name: "Doom Guy",
        job: "killing demons",
        pic: "img/doomguy.jpg",
      },
    ],
    index: 0,
    changeMembers: function (bool) {
      const isItRight = bool;
      if (isItRight) {
        this.index--;
        if (this.index === this.team.length) this.index = this.team.length - 1;
        if (this.index < 0) this.index = this.team.length - 1;
      } else {
        this.index++;
        if (this.index === this.team.length) this.index = 0;
        if (this.index < 0) this.index = this.team.length;
      }
      let counter = 4;
      let templateAll = "";
      console.log("index", this.index);
      let indexCurr = this.index;
      while (counter > 0) {
        if (indexCurr === this.team.length) indexCurr = 0;
        let template = `
<div class="content__team-item">
<img src=${
          !this.team[indexCurr].pic
            ? "img/photo.jpg"
            : this.team[indexCurr].pic
        } alt="" />
<span class="content__team-item-name">${this.team[indexCurr].name}</span>
<span class="content__team-item-qualify">${this.team[indexCurr].job}</span>
</div>
`;
        templateAll += template;
        indexCurr++;
        counter--;
      }
      console.log("index", this.index);
      $(".content__team-items-wrap").html("");
      $(".content__team-items-wrap").html(templateAll);
    },
  };

  $("#team-left").click(function () {
    $(".content__team-items-wrap").effect("slide", {
      direction: "right",
      easing: "linear",
      duration: 1000,
    });
    teamMembers.changeMembers();
  });
  $("#team-right").click(function () {
    $(".content__team-items-wrap").effect("slide", {
      direction: "left",
      easing: "linear",
      duration: 1000,
    });
    teamMembers.changeMembers(true);
  });
  $(".content__team-header").on("click", "a", function (event) {
    event.preventDefault();
  });
  //header menu media
  $(".icon-align-justify").click(function () {
    $(".header__menu-list").slideToggle();
  });
  $("form").on("submit", function (e) {
    e.preventDefault();
  });
});
