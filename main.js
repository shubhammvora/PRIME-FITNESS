var swiper = new swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});

const colors = ["#FF5733", "#007BFF", "#32CD32", "#6A0DAD", "#FFD700"];
let currentIndex = 0;

function changeBackgroundColor() {
    const topDeals = document.getElementById("deal");
    topDeals.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000); // Change color every 2 seconds

const dealsContainer = document.querySelector('.deals-container');
const deals = document.querySelectorAll('.deales');

let currentIndex1 = 0;

function showNextDeal() {
  deals[currentIndex1].classList.remove('active');
  currentIndex1 = (currentIndex1 + 1) % deals.length;
  deals[currentIndex1].classList.add('active');
}

function showPrevDeal() {
  deals[currentIndex1].classList.remove('active');
  currentIndex1 = (currentIndex1 - 1 + deals.length) % deals.length;
  deals[currentIndex1].classList.add('active');
}

setInterval(showNextDeal, 5000);

// Add event listeners to the buttons
deals.forEach((deal) => {
  deal.querySelector('button').addEventListener('click', () => {
    // Handle the "Buy Now" button click event
    console.log(`Deal ${deal.querySelector('h3').textContent} clicked!`);
  });
});
