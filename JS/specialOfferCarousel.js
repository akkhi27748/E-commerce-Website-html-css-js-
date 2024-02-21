"use strict";

const myCarouselElement = document.querySelector("#specialOffer");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: true,
});

const specialOfferProduct = {
  images: [
    "https://www.gonoise.com/cdn/shop/files/Top_banner-Desktop_copy_8_c755adc6-6ada-4dc6-9dc0-ca14b6fd9cc0.jpg?v=1703656003",
    "https://www.gonoise.com/cdn/shop/files/image_43_1.png?v=1702539594",
    "https://www.gonoise.com/cdn/shop/files/image_40_1_b2c66dde-cfbc-4c2b-a7a5-d51bb069111e.png?v=1702539595",
    "https://www.gonoise.com/cdn/shop/files/image_2023_08_07T06_42_49_037Z_2.png?v=1699613575",
    "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img2020/img21/apparelGW/decatf23/eoss/unrec/oneweekly/WA_ETH_3000._CB586386964_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
  ],
};

function specialOffer(images) {
  const specialOfferCarousel = document.querySelector("#specialOfferInner");
  const specialOfferCont = document.querySelector("#specialOffer");

  specialOfferCarousel.innerHTML = "";
  const indicators = document.createElement("div");
  indicators.classList.add("carousel-indicators");
  indicators.innerHTML = "";

  images.forEach(function (image, index) {
    const offerCont = document.createElement("div");
    offerCont.classList.add("carousel-item");

    if (index === 0) {
      // Set first item as active by default
      offerCont.classList.add("active");
    }

    offerCont.innerHTML = `
    <img src="${image}" class="d-block w-100" alt="offer image">
  `;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#specialOffer");
    button.setAttribute("data-bs-slide-to", `${index}`);

    if (index === 0) {
      // Set first button as active by default
      button.classList.add("active");
      button.setAttribute("aria-current", true);
    }

    button.setAttribute("aria-label", `Slide ${index}`);

    button.addEventListener("click", function () {
      const currentActive = specialOfferCarousel.querySelector(
        ".carousel-item.active"
      );
      currentActive.classList.remove("active");
      offerCont.classList.add("active");

      const currentActiveButton = indicators.querySelector(".active");
      currentActiveButton.classList.remove("active");
      button.classList.add("active");
    });
    specialOfferCarousel.addEventListener(
      "slide.bs.carousel",
      function (event) {
        const activeIndex = event.to;
        const buttons = indicators.querySelectorAll("button");

        buttons.forEach((button, index) => {
          if (index === activeIndex) {
            button.classList.add("active");
            button.setAttribute("aria-current", true);
          } else {
            button.classList.remove("active");
            button.removeAttribute("aria-current");
          }
        });
      }
    );

    indicators.appendChild(button);
    specialOfferCarousel.appendChild(offerCont);
  });

  specialOfferCont.appendChild(indicators);


  // const specialOfferCarousel = document.querySelector("#specialOfferInner");
  // const specialOfferCont = document.querySelector("#specialOffer");

  // specialOfferCarousel.innerHTML = "";
  // const indicators = document.createElement("div");
  // indicators.classList.add('carousel-indicators');
  // indicators.innerHTML = "";

  // images.forEach(function (image) {
  //   const offerCont = document.createElement("div");

  //   offerCont.classList.add("carousel-item");
  //   if (!specialOfferCarousel.firstChild) {
  //     offerCont.classList.add("active");
  //   }
  //   offerCont.innerHTML = `
  //           <img src="${image}" class="d-block w-100" alt="offer image">
  //       `;
  //   const button = document.createElement("button");
  //   if (!indicators.firstChild) {
  //     button.classList.add("active");
  //     button.setAttribute("aria-current", true);
  //   }
  //   button.setAttribute("type", "button");
  //   button.setAttribute("data-bs-target", "#specialOffer");
  //   button.setAttribute("data-slide-to", `${images.indexOf(image)}`);
  //   button.setAttribute("aria-label", `Slide ${images.indexOf(image)}`);

  //   console.log(offerCont);

  //   indicators.appendChild(button);

  //   specialOfferCarousel.appendChild(offerCont);
  // });
  // specialOfferCont.appendChild(indicators);
}

document.addEventListener("DOMContentLoaded", () => {
  specialOffer(specialOfferProduct.images);
});
