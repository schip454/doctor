// slider
$(".companies-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: `    <button type="button" class="slick-next">
  <img src="images/companies/rightArr.png" alt="">
    </button>`,
  prevArrow: `  <button type="button" class="slick-prev">
  <img src="images/companies/leftArr.png" alt="" />
</button>`,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 615,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
      },
    },
  ],
});

// gallery
Fancybox.bind("[data-fancybox]", {});

// accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion__item-title"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// В инпутах только цифры
const phoneInput = document.querySelectorAll("input[data-phone]");
phoneInput.forEach((item) => {
  item.addEventListener("input", () => {
    item.value = item.value.replace(/\D/, "");
  });
});

// при нажатий на кнопку Посмотреть все услуги - открытие скрытого контента

// const button = document.querySelector(".more__button");
// const hiddenCards = document.querySelectorAll("[data-card]");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   hiddenCards.forEach((item) => {
//     if (item.dataset.card === "hidden") {
//       item.style.display = "block";
//       button.textContent = "Скрыть >";
//       item.dataset.card = "open";
//     } else if (item.dataset.card === "open") {
//       item.style.display = "none";
//       button.textContent = "Посмотреть все услуги >";
//       item.dataset.card = "hidden";
//     }
//   });
// });
const buttons = document.querySelectorAll(".more__button");
const hiddenCards = document.querySelectorAll("[data-card]");

buttons.forEach((value) => {
  value.addEventListener("click", (e) => {
    e.preventDefault();
    hiddenCards.forEach((item) => {
      if (item.dataset.card === "hidden") {
        item.style.display = "block";
        value.textContent = "Скрыть >";
        item.dataset.card = "open";
      } else if (item.dataset.card === "open") {
        item.style.display = "none";
        value.textContent = "Посмотреть все услуги >";
        item.dataset.card = "hidden";
      }
    });
  });
});

// функция убирает "прыжок экрана"
function calcScroll() {
  let div = document.createElement("div");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

// открытие и закрытие меню
const menuBtn = document.querySelectorAll(".menu");
const menuContent = document.querySelector(".header__mobile-box");
menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
    menuContent.classList.toggle("header__mobile-box--hidden");
  });
});

// popup на главной странице
const popupBtn = document.querySelector(".top__btn");
const modalPopup = document.querySelector(".top__popup");
const closePopupBtn = document.querySelector(".top__popup-close");
const scroll = calcScroll();

popupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalPopup.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
});

closePopupBtn.addEventListener("click", () => {
  modalPopup.style.display = "none";
  document.body.style.overflow = "";
  document.body.style.marginRight = "0px";
});

modalPopup.addEventListener("click", (e) => {
  if (e.target === modalPopup) {
    modalPopup.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = "0px";
  }
});
