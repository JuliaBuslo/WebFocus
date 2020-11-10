// WEBP IMAGES
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// slider swiper

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');
    }
    if (slider.classList.contains('gallery')) {
      // slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.mainslider')) {
  let mainSlider = new Swiper('.mainslider__body', {
    observe: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.mainslider__arrow_next',
      prevEl: '.mainslider__arrow_prev',
    },
  });
}

if (document.querySelector('.slider-directions')) {
  let mainSlider = new Swiper('.slider-directions__body', {
    observe: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    speed: 800,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.slider-directions__arrow_next',
      prevEl: '.slider-directions__arrow_prev',
    },
  });
}

if (document.querySelector('.slider-reviews')) {
  let mainSlider = new Swiper('.slider-reviews__body', {
    observe: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoHeight: true,
    speed: 800,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: '.slider-reviews__dotts',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-reviews__arrow_next',
      prevEl: '.slider-reviews__arrow_prev',
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }
  });
};

// language switch
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  let dropdown = document.querySelectorAll('.dropdown__btn');
  for (let index = 0; index < dropdown.length; index++) {
    const dropdownItem = dropdown[index];
    dropdownItem.addEventListener('click', function (e) {
      dropdownItem.classList.toggle('active');
      e.preventDefault();
    });
  }
} else {
  let dropdown = document.querySelectorAll('.dropdown__btn');
  for (let index = 0; index < dropdown.length; index++) {
    const dropdownItem = dropdown[index];
    dropdownItem.addEventListener('mouseenter', function (e) {
      dropdownItem.classList.add('active');
    });
    dropdownItem.addEventListener('mouseleave', function (e) {
      dropdownItem.classList.remove('active');
    });
  }
}

// search
let searchBtn = document.querySelector('.search__btn');
let searchInput = document.querySelector('.search__input');

searchBtn.addEventListener('click', function (e) {
  searchInput.classList.toggle('active');
});

// menu burger
let menuBurger = document.querySelector('.burger');
let menuBody = document.querySelector('.menu__navigation');
let menuBodyLock = document.querySelector('body');

menuBurger.addEventListener('click', function (e) {
  menuBurger.classList.toggle('active');
  menuBody.classList.toggle('active');
  menuBodyLock.classList.toggle('lock');
});

// ibg
function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

// popup
$('form').submit(function (e) {
  var empty = $(this).parent().find("input").filter(function () {
    return this.value === "";
  });
  if (!empty.length) {
    //Если все графы заполнены, то показываем popup
    $('.popup').fadeOut().css('display', 'flex');
    //очищаем все данные текстовых полей, кроме кнопок
    $('form input').not(':button, :submit').val('');
    setTimeout(function () { jQuery('.popup').hide(); }, 2500);
  }
  e.preventDefault();
});
