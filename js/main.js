"use strict"
$(document).ready(function() {

//===================================================================== shopno header menu start
    document.addEventListener("click", shopnoMenuHeader)
    function shopnoMenuHeader(event) {
        const getShopnoMenuId = $("#show-shopno-nav");
        const getShopnoMenuBtnCls = [
            "b-btn shopno-menu-btn",
            "shopno-menu-icon fas fa-bars"  
        ];
        const menuClasses = [
            "b-btn shopno-menu-btn",
            "shopno-menu-icon fas fa-bars",
            "b-nav shopno-nav show-shopno-nav",
            "b-nav__item shopno-nav__item",
            "b-nav__link shopno-nav__link"   
        ];

        if (getShopnoMenuBtnCls.includes(event.target.className)) {
           getShopnoMenuId.toggleClass("show-shopno-nav") 
        }
        else if (!menuClasses.includes(event.target.className)) {
            getShopnoMenuId.removeClass("show-shopno-nav")
        }
    }
//===================================================================== shopno header menu end

//===================================================================== slider (what they says) start
    $(".what-they-slider-box").slick({
        dots: true,
        dotsClass: "what-they-dots",
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $(".what-they-ctrl-btn__prev"),
        nextArrow: $(".what-they-ctrl-btn__next"),
        speed: 1500,
        variableWidth: true,

        responsive: [{
            breakpoint: 581,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000
            }
        }]     
    });
//===================================================================== slider (what they says) end
});

