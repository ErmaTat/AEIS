var secondexhibitorSlider = new Swiper(".second-exhibitor-slider", {
  loop: true,
});

// Testimonial slider 
if ($(".expert-slider .swiper-slide").length > 1) {
  var ExpertSlider = new Swiper(".expert-slider", {
    speed: 2000,
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}


$(".about-section").each(function (index) {
  var $thise = $(this);
  $thise.addClass("instancess-" + index);
  const colNumber = $thise.attr("data-contentwidth");
  const colDiff = 100 - colNumber;
  $thise.find(".about-content").css({ width: colNumber + "%" });
  $thise.find(".about-image").css({ width: colDiff + "%" });

});
// Brochure slider 
if ($('.brochure-slider .swiper-slide').length > 1) {
  var brochureSwiper = new Swiper(".brochure-slider", {
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
  });
}
if ($('.brochure-swiper .swiper-slide').length > 1) {
  var brochureSwiper = new Swiper(".brochure-swiper", {
    slidesPerView: 1,
    speed: 3000,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    loop: true,

  });
  $('.brochure-swiper .swiper-slide').on('mouseover', function () {
    brochureSwiper.autoplay.stop();
  });

  $('.brochure-swiper .swiper-slide').on('mouseout', function () {
    brochureSwiper.autoplay.start();
  });
}

// swiper gallery slider 
$(".gallery-slider .swiper-container").each(function (index, element) {
  var $SliderrGal = $(this);
  $SliderrGal.addClass("instance-slide-" + index);
  if ($SliderrGal.find(".swiper-slide").length > 1) {
    var galSlider = new Swiper(".instance-slide-" + index, {
      loop: true,
      speed: 3000,
      spaceBetween: 20,
      preloadImages: false,
      centeredSlides: true,
      slidesPerView: 5,
      autoplay: {
        delay: 1,
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },

    });
  }
});

// Marquee slider 
// var marqueeSlider = new Swiper(".marquee-slider", {
//   slidesPerView: 1,
//   autoplay: {
//     delay: 5000,
//   },
//   loop: true,
// });

$(".marquee-slider").each(function (index, element) {
  var $thiss = $(this);
  $thiss.addClass("marquee-" + index);
  if ($thiss.find(".swiper-slide").length > 1) {
    var marqueeSlider = new Swiper(".marquee-" + index, {
      speed: 6000,
      spaceBetween: 5,
      preloadImages: false,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      disableOnInteraction: true,
      autoplay: {
        delay: 1,
      },
    });
  }
});

// var speakerSlider = new Swiper(".speakers-slider", {
//   loop: true,
//   speed: 4000,
//   spaceBetween: 20,
//   autoplay: {
//     delay: 0,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     400: {
//       slidesPerView: 2,
//     },
//     767: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//     1199: {
//       slidesPerView: 5,
//     },
//   },
// });


$(".exhibitor-slider").each(function (index, element) {
  var $thiss = $(this);
  $thiss.addClass("instance-" + index);
  if ($thiss.find(".swiper-slide").length > 1) {
    var exhibitorSlider = new Swiper(".instance-" + index, {
      speed: 2000,
      effect: "fade",
      // lazy: true,
      loop: true,
      autoplay: {
        delay: 1000,
      },
    });
  }
});

$(".sponsor-section").each(function (index, element) {
  var $Sliderr = $(this);
  $Sliderr.addClass("instance-" + index);
  if ($Sliderr.find(".swiper-slide").length > 1) {
    var sponsorSlider = new Swiper(".instance-" + index, {
      speed: 2000,
      effect: "fade",
      // preloadImages: false,
      // lazy: true,
      // lazy: {
      //   loadPrevNext: false,
      //   loadOnTransitionStart: true
      // },
      loop: true,
      autoplay: {
        delay: 1000,
      },
    });
  }
});

jQuery(document).ready(function ($) {

  $("body").removeClass("before-load");
  // lazy load images 
  // $(function() {
  //   $('.lazy').Lazy({
  //     effect: 'fadeIn'
  //   });
  // }); 

  // Banner height
  var headerHeight = $("header").outerHeight();
  var statsHeight = $(".statistics").outerHeight(true);
  var totHeight = headerHeight + statsHeight;
  // $(".banner").css({ height: "calc(100vh - " + totHeight + "px" + ")" });

  // Banner slider
  if ($('.banner-slider .swiper-slide').length > 1) {
    var bannerSwiper = new Swiper(".banner-slider", {
      slidesPerView: 1,
      effect: "fade",
      autoplay: {
        delay: 5000,
      },
      autoHeight: true,
      loop: true,
      // pagination: {
      //     el: '.swiper-pagination-video',
      //     dynamicBullets: true,
      //     clickable: true,
      // },
    });
  }

  if ($('.banner-slider .swiper-slide').length === 1) {
    $('.banner-slider .swiper-slide').addClass('swiper-slide-active');
  }

  // Mobile nav click
  $(function () {
    $(".chevron-down").click(function (j) {
      var dropDown = $(this).parent().next();

      $(".nav-menu-items").not(dropDown).slideUp();

      if ($(this).hasClass("chevron-up")) {
        $(this).removeClass("chevron-up");
      } else {
        $(".chevron-down").removeClass("chevron-up");
        $(this).addClass("chevron-up");
      }

      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });

  $(".nav-toggler").click(function () {
    $(".navbar").addClass("open");
    $(".nav-menu-items").addClass("open");
    $(".back-drop").addClass("active");
  });
  $(".navbar-close").click(function () {
    $(".navbar").removeClass("open");
    $(".chevron-down").removeClass("chevron-up");
    $(".nav-menu-items").slideUp();
    $(".back-drop").removeClass("active");
  });
  $(".back-drop").click(function () {
    $(".navbar").removeClass("open");
    $(".chevron-down").removeClass("chevron-up");
    $(".nav-menu-items").slideUp();
    $(".back-drop").removeClass("active");
  });

  // Add event on document ready
  $(document).ready(function () {
    // Add event on document scroll
    $(window).scroll(function () {
      // Cycle through each counter
      $(".count").each(function () {
        // Check if counter is visible
        if ($(this).isOnScreen()) {
          // Start counter
          startCounter($(this));
        } else {
          // Check if it has only just become non-visible
          if ($(this).hasClass("notVisible") == false) {
            // Stop animation
            $(this).stop();

            // Add nonVisible class
            $(this).addClass("notVisible");

            // This stops the user very briefly seeing the previous number before the counter restarts
            $(this).text("0");
          }
        }
      });
    });
  });

  // Check if an element is on screen
  $.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom
    );
  };

  //Run counter, separate function so we can call it from multiple places
  function startCounter(counterElement) {
    // Check if it has only just become visible on this scroll
    if (counterElement.hasClass("notVisible")) {
      // Remove notVisible class
      counterElement.removeClass("notVisible");

      // Run your counter animation
      counterElement.prop("Counter", 0).animate(
        {
          Counter: counterElement.attr("data-count"),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            counterElement.text(Math.ceil(now).toLocaleString());
          },
        }
      );
    }
  }

  // On page load check if counter is visible
  $(".count").each(function () {
    // Add notVisible class to all counters
    // It is removed within startCounter()
    $(this).addClass("notVisible");

    // Check if element is visible on page load
    if ($(this).isOnScreen() === true) {
      // If visible, start counter
      startCounter($(this));
    }
  });


  ///////////////////////////Add class on scroll///////////////////////////
  var topbarHeight = $(".top-bar").outerHeight();
  var headerwrapHeight = $(".header-wrapp").outerHeight();
  var totalTopbar = topbarHeight + headerwrapHeight;
  var totalHeaderHeight = $("header").outerHeight();

  var className = "scrolled";
  var scrollTrigger = totalHeaderHeight;
  // console.log(scrollTrigger);

  window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (mainHeight > 700 &&
      window.scrollY >= scrollTrigger
      // window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("body")[0].classList.add(className);

      var headerHeight = $("header").outerHeight();
      $("main").css({ "padding-top": headerHeight + "px" });
    } else {
      document.getElementsByTagName("body")[0].classList.remove(className);
      var headerHeight = $("header").outerHeight();
      $("main").css({ "padding-top": "0" + "px" });
    }
  };

  // Navbar position depends on main wrapper 
  var mainHeight = $("main").outerHeight();
  // if (mainHeight < 500) {
  //   document.getElementsByTagName("body")[0].classList.add("not-scrolled");
  //   $("main").css({ "padding-top": "0" + "px" });
  // }

  // Youtube popup
  // Youtube popup
  if ($(".youtube-popup").length >= 1) {
    $(".youtube-popup").magnificPopup({
      type: "iframe",
      fixedContentPos: false,
    });
  }


  var intervalId = window.setInterval(function () {
    // Home youtube popup 
    $(".youtube-popup-home").magnificPopup({
      type: "iframe",
      fixedContentPos: false,
      gallery: {
        enabled: true
      }
    });

  }, 500);



  // Logo slider
  var logosswiper = new Swiper(".logo-swiper", {
    loop: true,
    speed: 3000,
    spaceBetween: 50,
    preloadImages: false,
    // lazy: true,
    // lazy: {
    //   loadPrevNext: false,
    //   loadOnTransitionStart: true
    // },
    centeredSlides: true,
    autoplay: {
      delay: 1,
    },
    slidesPerView: "auto",
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //   },
    //   440: {
    //     slidesPerView: 3,
    //   },
    //   575: {
    //     slidesPerView: 4,
    //   },
    //   1024: {
    //     slidesPerView: 6,
    //   },
    //   1200: {
    //     slidesPerView: 9,
    //   },
    // },
  });

  // Icalender 
  !function (w, d) {
    var atc_url = "//addtocalendar.com/atc/"
      , atc_version = "1.5"
      , b = d.documentElement;
    Array.indexOf || (Array.prototype.indexOf = function (t) {
      for (var e = 0, a = this.length; a > e; e++)
        if (this[e] == t)
          return e;
      return -1
    }
    ),
      Array.prototype.map || (Array.prototype.map = function (t) {
        for (var e = [], a = 0, n = this.length; n > a; a++)
          e.push(t(this[a]));
        return e
      }
      );
    var isArray = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    }
      , isFunc = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t)
      }
      , ready = function (t, e) {
        function a() {
          if (!i) {
            if (!e.body)
              return setTimeout(a, 13);
            if (i = !0,
              s) {
              for (var t, n = 0; t = s[n++];)
                t.call(null);
              s = null
            }
          }
        }
        function n() {
          if (!c) {
            if (c = !0,
              "complete" === e.readyState)
              return a();
            if (e.addEventListener)
              e.addEventListener("DOMContentLoaded", r, !1),
                t.addEventListener("load", a, !1);
            else if (e.attachEvent) {
              e.attachEvent("onreadystatechange", r),
                t.attachEvent("onload", a);
              var n = !1;
              try {
                n = null == t.frameElement
              } catch (i) { }
              b.doScroll && n && o()
            } else
              l = t.onload,
                t.onload = function (t) {
                  l(t),
                    a()
                }
          }
        }
        function o() {
          if (!i) {
            try {
              b.doScroll("left")
            } catch (t) {
              return void setTimeout(o, 1)
            }
            a()
          }
        }
        var r, l, i = !1, c = !1, s = [];
        return e.addEventListener ? r = function () {
          e.removeEventListener("DOMContentLoaded", r, !1),
            a()
        }
          : e.attachEvent && (r = function () {
            "complete" === e.readyState && (e.detachEvent("onreadystatechange", r),
              a())
          }
          ),
          function (t) {
            n(),
              i ? t.call(null) : s.push(t)
          }
      }(w, d);
    w.addtocalendar && "function" == typeof w.addtocalendar.start || (w.addtocalendar || (w.addtocalendar = {}),
      addtocalendar.languages = {
        de: "",
        en: "",
        es: "",
        fr: "",
        hi: "",
        "in": "",
        ja: "",
        ko: "",
        pt: "",
        ru: "",
        uk: "",
        zh: ""
      },
      addtocalendar.calendar_urls = {},
      addtocalendar.loadSettings = function (element) {
        var settings = {
          language: "auto",
          "show-list-on": "click",
          calendars: ["iCalendar", "Google Calendar", "Outlook", "Outlook Online", "Yahoo! Calendar"],
          secure: "auto",
          "on-button-click": function () { },
          "on-calendar-click": function () { }
        };
        for (var option in settings) {
          var pname = "data-" + option
            , eattr = element.getAttribute(pname);
          if (null != eattr) {
            if (isArray(settings[option])) {
              settings[option] = eattr.replace(/\s*,\s*/g, ",").replace(/^\s+|\s+$/g, "").split(",");
              continue
            }
            if (isFunc(settings[option])) {
              var fn = window[eattr];
              isFunc(fn) ? settings[option] = fn : settings[option] = eval("(function(mouseEvent){" + eattr + "})");
              continue
            }
            settings[option] = element.getAttribute(pname)
          }
        }
        return settings
      }
      ,
      ready(function () {
        for (var t = {
          iCalendar: "ical",
          "Google Calendar": "google",
          Outlook: "outlook",
          "Outlook Online": "outlookonline",
          "Yahoo! Calendar": "yahoo"
        }, e = -(new Date).getTimezoneOffset().toString(), a = addtocalendar.languages, n = document.getElementsByTagName("*"), o = 0; o < n.length; o++) {
          var r = n[o].className;

          if (typeof r != 'string')
            r = "";
          if (-1 != r.split(" ").indexOf("addtocalendar")) {
            var l = addtocalendar.loadSettings(n[o])
              , i = 1 == l.calendars.length
              , c = "http:";
            "auto" == l.secure ? c = "https:" == location.protocol ? "https:" : "http:" : "true" == l.secure && (c = "https:");
            var s = c + atc_url
              , d = n[o].id
              , u = a.en;
            if ("auto" == l.language) {
              var g = "no_lang";
              "string" == typeof navigator.language ? g = navigator.language.substr(0, 2) : "string" == typeof navigator.browserLanguage && (g = navigator.browserLanguage.substr(0, 2)),
                a.hasOwnProperty(g) && (u = a[g])
            } else
              a.hasOwnProperty(l.language) && (u = a[l.language]);
            for (var f = ["utz=" + e, "uln=" + navigator.language, "vjs=" + atc_version], p = n[o].getElementsByTagName("var"), v = -1, m = 0; m < p.length; m++) {
              var h = p[m].className.replace("atc_", "")
                , y = p[m].innerHTML;
              "event" != h ? h != p[m].className ? -1 != v && f.push("e[" + v + "][" + h + "]=" + encodeURIComponent(y)) : "atc-body" == h && (u = y) : v++
            }
            var b = "" == d ? "" : d + "_link"
              , k = document.createElement("ul");
            k.className = "atcb-list";
            var E = ""
              , w = "";
            for (var O in l.calendars)
              if (t.hasOwnProperty(l.calendars[O])) {
                var C = t[l.calendars[O]]
                  , L = "" == d ? "" : 'id="' + d + "_" + C + '_link"'
                  , _ = s + C + "?" + f.join("&");
                i ? w = _ : E += '<li class="atcb-item"><a ' + L + ' class="atcb-item-link" href="' + _ + '" target="_blank">' + l.calendars[O] + "</a></li>"
              }
            if (k.innerHTML = E,
              void 0 == n[o].getElementsByClassName("atcb-link")[0]) {
              var N = document.createElement("a");
              N.className = "atcb-link",
                N.innerHTML = u,
                N.id = b,
                N.tabIndex = 1,
                i && (N.href = w,
                  N.target = "_blank"),
                n[o].appendChild(N),
                i || n[o].appendChild(k)
            } else {
              var N = n[o].getElementsByClassName("atcb-link")[0];
              i || N.parentNode.appendChild(k),
                N.tabIndex = 1,
                "" == N.id && (N.id = b),
                i && (N.href = w,
                  N.target = "_blank")
            }
            n[o].getElementsByClassName("atcb-link")[0].addEventListener("click", l["on-button-click"], !1);
            for (var A = n[o].getElementsByClassName("atcb-item-link"), m = 0; m < A.length; m++)
              A[m].addEventListener("click", l["on-calendar-click"], !1)
          }
        }
      }))
  }(window, document);

  //search icon click
  // $(".search-icon").click(function(e) {
  //   e.stopPropagation();
  //   $(".search-popup").addClass("active");
  //   $(".common-backdrop").addClass("active");
  //   $(".nav-toggler").addClass("not-active");
  //   $('body').addClass('o-hidden');
  // });

  //search close
  // $(".search-close").click(function(e) {
  //   e.stopPropagation();
  //   $(".search-popup").removeClass("active");
  //   $(".nav-toggler").removeClass("not-active");
  //   $(".common-backdrop").removeClass("active");
  //   $('body').removeClass('o-hidden');
  // });
  // $(".common-backdrop").click(function(e) {
  //   e.stopPropagation();
  //   $(".search-popup").removeClass("active");
  //   $(".nav-toggler").removeClass("not-active");
  //   $(".common-backdrop").removeClass("active");
  //   $('body').removeClass('o-hidden');
  // });

  // agenda tab 
  $('.agenda-tab-navs').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.agenda-tab-navs').removeClass('active');
    $('.agenda-tab-content').removeClass('active');

    $('.agenda-tab-navs[data-tab=' + tab_id + ']').addClass('active');
    $("#" + tab_id).addClass('active');

  });

  $('.agenda-tab-navs-bottom .agenda-tab-navs').click(function () {

    $('html, body').animate({
      scrollTop: $(".innerpage-main-banner").offset().top
    }, 0);
  });

  // Agenda popup 
  $('.open-agenda-popup').click(function () {

    $('.agenda-tab-popup').addClass('opened');
    $('body').addClass('o-hidden');

  });
  $('.black-overlay, .agenda-tab-popu-back').click(function () {

    $('.agenda-tab-popup').removeClass('opened');
    $('body').removeClass('o-hidden');

  });

  // agenda tab two
  $('.agenda-main-tab-list').click(function () {
    var tab_id_one = $(this).attr('data-tab');

    $('.agenda-main-tab-list').removeClass('active');
    $('.agenda-main-tab-content-wrapp').removeClass('active');

    $('.agenda-main-tab-list[data-tab=' + tab_id_one + ']').addClass('active');

    $("#" + tab_id_one).addClass('active');

  });

  // Agenda filter
  $('.agenda-main-section .agenda-list-click').click(function () {

    var $thisdivlink = $(this);

    if ($($thisdivlink).hasClass('active')) {

      $($thisdivlink).removeClass('active');
    }
    else {
      $($thisdivlink).addClass('active');
    }


    if ($($thisdivlink).closest('.agenda-list').find('.active').length < 1) {
      $($thisdivlink).closest('.agenda-main-section').addClass('all-agenda-visible');
    }
    else {
      $($thisdivlink).closest('.agenda-main-section').removeClass('all-agenda-visible');
    }
    if ($($thisdivlink).closest('.agenda-list').find('.agenda-list-click:first-child').hasClass("active")) {
      $($thisdivlink).closest('.agenda-main-section').addClass('all-agenda-visible');
    }


    $(".agenda-main-tab-content").each(function () {

      var $info = $(this);

      var requiredValue = $thisdivlink.data('track');

      if ($info.data('track') == $thisdivlink.data('track')) {

        $('.agenda-main-tab-content').addClass('hide');

        if ($thisdivlink.hasClass('active')) {
          $('.agenda-main-tab-content[data-track=' + requiredValue + ']').addClass('toggle');
        }
        else {
          $('.agenda-main-tab-content[data-track=' + requiredValue + ']').removeClass('toggle');
        }
      }
    });

  });

  // Accordion 
  $('.awards-accordion-head').click(function (e) {
    e.preventDefault();
    let $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $this.removeClass("active");
      //   $('.accordion-down-arrow').removeClass('down');
    } else {
      $('.awards-accordion-body').removeClass('show');
      $('.awards-accordion-body').slideUp(350);
      //   $('.accordion-down-arrow').removeClass('down');
      //   $this.find('.accordion-down-arrow').toggleClass('down');
      $('.accordion-click').removeClass('active');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $('.awards-accordion-head').removeClass('active');
      $this.addClass("active");
    }
  });

  // Contact filter 
  $('.contact-wrapp-parent .contact-wrapper:first-child').show();
  $("#filter-select").change(function () {
    $('div[id^="dep-"]').css("display", "none");
    $("#dep-" + $("#filter-select option:selected").val()).show();
  })

  // Form validation 
  $(document).ready(function () {
    checkMandatoryFields(); // Check the mandatory fields on page load
    checkMandatoryFieldsfooter();
    checkMandatoryFieldssubscription();

    $(document).on('change keyup', function (e) {
      checkMandatoryFields(); // Check the mandatory fields on change or keyup event
      checkMandatoryFieldsfooter();
      checkMandatoryFieldssubscription();
    });

    function checkMandatoryFields() {
      let disabled = true;
      $(".form-section .mandatory input, .form-section .mandatory select").each(function () {
        let value = this.value;
        if (value && value.trim() !== '') {
          disabled = false;
        } else {
          disabled = true;
          return false; // Exit the loop if any mandatory field is empty
        }
      });

      if (disabled) {
        $('.form-section .loader-wrapp .btn-secondary').prop("disabled", true);
      } else {
        $('.form-section .loader-wrapp .btn-secondary').prop("disabled", false);
      }
    }

    function checkMandatoryFieldsfooter() {
      let disabled = true;
      $(".site-footer .mandatory input, .site-footer .mandatory select").each(function () {
        let value = this.value;
        if (value && value.trim() !== '') {
          disabled = false;
        } else {
          disabled = true;
          return false; // Exit the loop if any mandatory field is empty
        }
      });

      if (disabled) {
        $('.site-footer .loader-wrapp .btn-secondary').prop("disabled", true);
      } else {
        $('.site-footer .loader-wrapp .btn-secondary').prop("disabled", false);
      }
    }
    function checkMandatoryFieldssubscription() {
      let disabled = true;
      $(".subscription .mandatory input, .subscription .mandatory select").each(function () {
        let value = this.value;
        if (value && value.trim() !== '') {
          disabled = false;
        } else {
          disabled = true;
          return false; // Exit the loop if any mandatory field is empty
        }
      });

      if (disabled) {
        $('.subscription .loader-wrapp .btn-secondary').prop("disabled", true);
      } else {
        $('.subscription .loader-wrapp .btn-secondary').prop("disabled", false);
      }
    }
  });

  // loader on btn click 
  $('.loader-wrapp .btn-secondary').click(function () {
    $(this).addClass('loader-btn-active');
  });

});

$(window).on("scroll", function (e) {
  //Adding header height as the padding to the <main>
});

// Exhibitor  tab 
$(document).ready(function () {
  $(function () {
    $('.tabs-nav a').click(function () {
      // Check for active
      $('.tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tab_container .tab-inner').hide();
      $(currentTab).show();
      return false;
    });
  });


  // Exhibitor popup
  if ($(".popup-gallery").length == 1) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
    });
  }

  // Exhibitor info click popup
  $('.product-info_wrapper .open-modal').click(function () {
    $(this).parent().children(".info__wrapper").addClass('active');
    $('body').addClass('info-bg');
  });
  $('.info__wrapper .close').click(function () {
    $('.info__wrapper').removeClass('active');
    $('body').removeClass('info-bg');
  });

  $(".thumb-iframe-video").click(function () {
    $(this).parent().parent().children(".thevideo").show();
    $(this).hide();
    $(this).parent().parent().children(".thevideo").find(".thevideoiframe")[0].src += "&autoplay=1";
  });
  // $(".thumb-iframe-video1").click(function(){
  //   $("#thevideo1").show();
  //   $(this).hide();
  //   $("#thevideoiframe1")[0].src += "&autoplay=1";
  // });

  // youtube video gallery 
  if ($(".popup-youtube").length >= 1) {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
      fixedContentPos: false,
    });
  }

  // slide gallery popup
  $('.popup-gallery-slide').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      fixedContentPos: false,
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      }
    });
  });

});


// Youtube slidr
// function showDiv() {
//   if ($(".youtube-slider").length >= 1) {
//     document.querySelector(".youtube-slider").style.display = "block";
//   }

$(".youtube-slider").each(function (index, element) {
  var $thiss = $(this);
  $thiss.addClass("youtube-" + index);
  if ($thiss.find(".swiper-slide").length > 1) {
    var youtubeSlider = new Swiper(".youtube-" + index, {
      speed: 4000,
      spaceBetween: 45,
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        930: {
          slidesPerView: 3,
          autoplay: {
            disableOnInteraction: false,
          },
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

});
// }
// window.onload = showDiv;

// press release swiper 
var pressSwiper = new Swiper('.press-relase-list', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  autoplay: true,
  loop: false,
  speed: 400,
  autoplay: {
    delay: 4000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// NEW SCRIPT 
var init = false;
function swiperCard() {
  if (window.innerWidth <= 1240) {
    if (!init) {
      init = true;
      threeColSlider = new Swiper(".tcdSwiper",
        {

          // slidesPerView: 1, 
          // centeredSlides: true, 
          loop: true,
          autoplay: true,
          autoplay: {
            delay: 5000,
          },
          breakpoints: {
            999: {
              slidesPerView: 3,
              spaceBetween: 15,

            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,

            },
            445: {
              slidesPerView: 2,
              spaceBetween: 15,

            },

            320: {
              slidesPerView: 1,
              spaceBetween: 15,

            }
          },
        });
    }

  }

}
swiperCard(); window.addEventListener("resize", swiperCard);


if ($(".four-col-image-desc").hasClass("activate-swiper")) {
  var descSlider = new Swiper(".articleSwiper", {
    loop: true,
    speed: 7000,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },

    },
  });

}

// circular stats 
// Function to update progress bars
// Function to update progress bars
// Function to update progress bars
function updateProgressBars(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let bar = entry.target;
      let percentage = bar.dataset.percentage;
      let degrees = (360 / 100) * percentage;
      let right = bar.getElementsByClassName('progress-right')[0].getElementsByClassName('progress-bar')[0];
      let left = bar.getElementsByClassName('progress-left')[0].getElementsByClassName('progress-bar')[0];

      if (percentage <= 50) {
        right.style.transform = 'rotate(' + degrees + 'deg)';
        left.style.transform = 'rotate(0deg)';
      } else {
        right.style.transform = 'rotate(180deg)';
        left.style.transform = 'rotate(' + degrees / 2 + 'deg)';
      }

      // Unobserve the element to stop further updates
      observer.unobserve(bar);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(updateProgressBars, {
  root: null, // Use the viewport as the root
  threshold: 0.1, // Trigger when at least 10% of the element is visible
});

// Call the function for each element with the 'progress' class
let bars = document.getElementsByClassName('progress');
for (let i = 0; i < bars.length; i++) {
  observer.observe(bars[i]);
}

// // Timer
// function makeTimer() {
//   var endTime = new Date("26 october 2023 00:00:00 GMT+01:00");
//   endTime = (Date.parse(endTime) / 1000);

//   var now = new Date();
//   now = (Date.parse(now) / 1000);

//   var timeLeft = endTime - now;
//   var days = Math.floor(timeLeft / 86400);
//   var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
//   var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
//   var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

//   if (hours < "10") { hours = "0" + hours; }
//   if (minutes < "10") { minutes = "0" + minutes; }
//   if (seconds < "10") { seconds = "0" + seconds; }

//   $("#days-deadline").html(days + "<span>Days</span>");
//   $("#hours-deadline").html(hours + "<span>Hours</span>");
//   $("#minutes-deadline").html(minutes + "<span>Minutes</span>");
//   $("#seconds-deadline").html(seconds + "<span>Seconds</span>");
//   if (timeLeft < 0) {
//     document.getElementById("timer-deadline").innerHTML = "EXPIRED";
//   }
// }
// setInterval(function () { makeTimer(); }, 1000);




document
  .querySelectorAll(".component__gallery-slider .newgallery-slider")
  .forEach(function (element, index) {
    let galleryContainer = element.closest(".component__gallery-slider");
    galleryContainer.classList.add("instance-" + index);
    let prevButton = galleryContainer.querySelector(".swiper-button-prev");
    let nextButton = galleryContainer.querySelector(".swiper-button-next");

    NewGalleryswiper = new Swiper(".newgallery-slider", {
      slidesPerView: "auto",
      loop: !0,
      draggable: !0,
      spaceBetween: 16,
      speed: 3e3,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      autoplay: {
        delay: 3e3,
        disableOnInteraction: 1,
        pauseOnMouseEnter: !0,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: !0,
        type: "fraction",
      },
      breakpoints: {
        1024: {
          spaceBetween: 16,
        },
        575: {
          spaceBetween: 10,
        },
        0: {
          spaceBetween: 10,
        },
      },
    });
  });
$('.newgallery-slider').each(function () {
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    fixedContentPos: false,
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });
});
$('.viewmore_wrapper .view-btn').on('click', function () {
  var $this = jQuery(this);
  $this.addClass('not-active');
  $this.parent().find('.content-right-desc-wrapp').addClass('active');
});






$(document).ready(function () {


  var swiperSpeakerConf = new Swiper(".agenda-multi-speaker-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next-spea",
      prevEl: ".swiper-button-prev-spea",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1540: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });





  $(document).on("click", function (event) {
    // document click dropdown close
    if (!$(event.target).closest('.multi-filter-col').length && !$(event.target).hasClass('multi-filter-contant')) {
      // Slide up all .multi-filter-contant elements
      $(".multi-filter-contant").slideUp();
    }
  });

  // Dropdown 
  $(".multi-filter-head").click(function () {
    $(this).closest(".multi-filter-col").find(".multi-filter-contant").slideToggle();
    $(this).closest(".multi-filter-col").siblings(".multi-filter-col").find(".multi-filter-contant").slideUp();
  });

  // custom dropdown
  $(".custom-filter-head").click(function () {
    $(this).closest(".custom-filter-col").find(".custom-filter-contant").slideToggle();
    $(this).closest(".custom-filter-col").siblings(".custom-filter-col").find(".custom-filter-contant").slideUp();
  });


  // speaker accordion 
  // $(".agenda-multi-speaker-click").click(function () {
  //   $(this).closest(".agenda-masonry").find(".agenda-multi-speaker-expand").slideToggle();
  //   $(this).closest(".agenda-multi-speaker-wrapper").slideUp();
  // });
  // popup click 
  $('.popup-welcome-note').addClass('blur-popup');
  // Prevent anchor link default behavior


  $('.agenda-popup-click').each(function () {
    $(this).click(function () {
      // Add class 'active' to '.multi-agenda-popup-wraper'
      $('.multi-agenda-popup-wraper').addClass('active');

      // Add class 'blur-popup' to '.popup-welcome-note'
      $('.popup-welcome-note').addClass('blur-popup');

      // After 2 seconds, remove the class 'blur-popup' from '.popup-welcome-note'
      setTimeout(function () {
        $('.popup-welcome-note').removeClass('blur-popup');
      }, 1000);
    });
  });


  $('.agenda-back-btn').click(function (e) {
    $('.multi-agenda-popup-wraper').removeClass('active');
    removeQueryParam()
    e.preventDefault();
  });



});


// filter commented start
// Agenda Tab
document.querySelectorAll('.multi-agenda-date').forEach(function (element) {
  element.addEventListener('click', function () {
    var agendaTab_id = this.getAttribute('agenda-data-tab');

    document.querySelectorAll('.multi-agenda-date').forEach(function (el) {
      el.classList.remove('active');
    });
    document.querySelectorAll('.multy-agenda-tab-content').forEach(function (el) {
      el.classList.remove('active');
    });

    this.classList.add('active');
    document.getElementById(agendaTab_id).classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var agendaSearchFil = document.querySelector('.agenda-search-filter');

  // Add the class 'disabled' to the element
  // agendaSearchFil.classList.add('disabled');
  const checkboxes = document.querySelectorAll('.multi-filter-checkbox');
  const displayState = {};
  const search_bar = document.getElementById("searchBar");
  const searchElement = document.getElementsByClassName("search-element");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      updateDisplayState();
      agendaSearchFil.classList.remove('disabled');
      const checkboxesChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked);
      const selectedParagraphClass = '.selected-p';
      updateSelectedCheckboxes(checkboxesChecked, selectedParagraphClass);
      applyFilters();
      document.querySelectorAll('.agenda-masonry-card').forEach(function (card) {
        card.classList.remove('visible-class');
      });
    });
  });
  if (search_bar) {
    search_bar.onkeyup = function () {
      updateDisplayState();
      applyFilters();

      if (this.value.trim() === '') {
        // Remove the visible-class from all agenda-masonry-card elements
        document.querySelectorAll('.agenda-masonry-card').forEach(function (card) {
          card.classList.remove('visible-class');
        });
      }

    };
  }
  function updateDisplayState() {
    checkboxes.forEach(checkbox => {
      const filter = checkbox.dataset.filter;
      displayState[filter] = checkbox.checked;
    });
  }

  function applyFilters() {
    const searchValue = search_bar.value.toLowerCase();
    const items = document.querySelectorAll('.agenda-masonry');
    const items1 = document.querySelectorAll('.agenda-masonry-card');
    const checkboxesChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    const checkedFilters = checkboxesChecked.map(checkbox => checkbox.dataset.filter);

    items.forEach(item => {
      const filter = Array.from(item.classList);

      // const matchesFilter = checkedFilters.some(checkedFilter => filter.includes(checkedFilter));
      // let matchesFilter = true;
      // for (const checkedFilter of checkedFilters) {
      //   if (!filter.includes(checkedFilter)) {
      //     matchesFilter = false;
      //     break;
      //   }
      // }
      // const matchesFilter = filter.some(filter => displayState[filter]);
      const searchElement = item.querySelector('.multy-agenda-tab-content .agenda-masonry .search-element');
      const searchText = searchElement ? searchElement.innerHTML.toLowerCase() : '';
      const matchesSearch = searchValue === '' || searchText.includes(searchValue);
      // item.style.display = (matchesFilter) ? 'block' : 'none';

      const closestCard = item.closest(".agenda-masonry-card");

      if (closestCard) {
        if (matchesSearch) {
          closestCard.classList.add('visible-class');
          closestCard.classList.remove('hidden-class');
        } else {
          closestCard.classList.remove('visible-class');
          closestCard.classList.add('hidden-class');
        }
      }
    });

    // Loop through all .multy-agenda-tab-content elements
    function updateActiveTab() {
      const tabContents = document.querySelectorAll('.multy-agenda-tab-content');
      let foundVisibleTab = false;

      tabContents.forEach(tab => {
        const tabItems = tab.querySelectorAll('.agenda-masonry-card .agenda-masonry');
        const tabId = tab.getAttribute('id');

        let isVisible = false;
        tabItems.forEach(item => {
          if (!isVisible && item.style.display !== 'none') {
            isVisible = true;
          }
        });

        if (isVisible) {
          foundVisibleTab = true;
          document.querySelectorAll('.multy-agenda-tab-content').forEach(function (elem) {
            elem.classList.remove('active');
          });
          document.getElementById(tabId).classList.add('active');
          document.querySelectorAll('.multi-agenda-date').forEach(function (elem) {
            elem.classList.remove('active');
          });

          document.querySelectorAll('.multi-agenda-date[agenda-data-tab="' + tabId + '"]').forEach(function (elem) {
            elem.classList.add('active');
          });
        }
      });

      // If no visible tab is found, reset active classes
      if (!foundVisibleTab) {
        document.querySelectorAll('.multy-agenda-tab-content').forEach(function (elem) {
          elem.classList.remove('active');
        });
        document.querySelectorAll('.multi-agenda-date').forEach(function (elem) {
          elem.classList.remove('active');
        });
      }
    }

    // Call the function
    updateActiveTab();

    // Loop through all .agenda-accordion-col elements
    const accordionCols = document.querySelectorAll('.agenda-accordion-col');
    accordionCols.forEach(col => {
      const masonryItems = col.querySelectorAll('.agenda-masonry');
      let isVisible = false;

      // Check if any .agenda-masonry item inside the current .agenda-accordion-col is visible
      masonryItems.forEach(masonry => {
        if (masonry.style.display !== 'none') {
          isVisible = true;
        }
      });

      // If no visible .agenda-masonry items, hide the parent .agenda-accordion-col
      if (!isVisible) {
        col.style.display = 'none';
      } else {
        col.style.display = ''; // Reset to default display
      }
    });

    // Check if all checkboxes are unchecked
    const allUnchecked = Array.from(checkboxes).every(checkbox => !checkbox.checked);

    // If all checkboxes are unchecked, display all .agenda-masonry items and .agenda-accordion-col elements
    if (allUnchecked) {
      items.forEach(item => {
        item.style.display = '';
      });
      items1.forEach(item => {
        item.style.display = '';
      });
      accordionCols.forEach(col => {
        col.style.display = ''; // Reset to default display
      });
      // var childNodes = document.querySelectorAll('.multy-agenda-tab-content')[0];
      // childNodes.classList.add('active');
      // var childNodes1 = document.querySelectorAll('.multi-agenda-col')[1].firstElementChild;
      // childNodes1.classList.add('active');
    }
  }

  // view change
  const viewChangeChecksMain = document.querySelectorAll('.view-change-check-main');
  const viewChangeChecks = document.querySelectorAll('.view-change-check');
  const viewChangeWeeks = document.querySelectorAll('.view-change-week');
  const multiFilterMainWrapp = document.querySelector('.multi-filter-main-wrapp');

  viewChangeChecksMain.forEach(function (viewChangeCheckMain) {
    viewChangeCheckMain.addEventListener('change', function () {
      if (this.checked) {
        multiFilterMainWrapp.classList.add('layout-2');
        viewChangeWeeks.forEach(function (viewChangeWeek) {
          viewChangeWeek.checked = false;
        });
      }
    });
  });

  viewChangeChecks.forEach(function (viewChangeCheck) {
    viewChangeCheck.addEventListener('change', function () {
      if (this.checked) {
        multiFilterMainWrapp.classList.add('layout-2');
        viewChangeWeeks.forEach(function (viewChangeWeek) {
          viewChangeWeek.checked = false;
        });
        const dateId = this.getAttribute('agenda-data-tab');

        document.querySelectorAll('.multy-agenda-tab-content').forEach(function (elem) {
          elem.classList.remove('active');
        });
        document.getElementById(dateId).classList.add('active');
        document.querySelectorAll('.multi-agenda-date').forEach(function (elem) {
          elem.classList.remove('active');
        });
        document.querySelectorAll('.multi-agenda-date[agenda-data-tab="' + dateId + '"]').forEach(function (elem) {
          elem.classList.add('active');
        });
      }
    });
  });

  viewChangeWeeks.forEach(function (viewChangeWeek) {
    viewChangeWeek.addEventListener('change', function () {
      if (this.checked) {
        multiFilterMainWrapp.classList.remove('layout-2');
        viewChangeChecks.forEach(function (viewChangeCheck) {
          viewChangeCheck.checked = false;
        });
        viewChangeChecksMain.forEach(function (viewChangeCheckMain) {
          viewChangeCheckMain.checked = false;
        });
      }
    });
  });

  //// selected part
  function updateSelectedCheckboxes(selectedCheckboxes, selectedParagraphClass) {
    const selectedTexts = [];
    selectedCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const label = checkbox.closest('.multi-filter-selector');
        if (label) {
          selectedTexts.push({
            label: label.textContent.trim(),
            checkbox: checkbox
          });
        }
      }
    });

    const selectedParagraphs = document.querySelectorAll(selectedParagraphClass);
    selectedParagraphs.forEach(selectedParagraph => {
      if (selectedParagraph) {
        selectedParagraph.innerHTML = ""; // Clear previous content

        selectedTexts.forEach((item, index) => {
          const { label, checkbox } = item;

          const span = document.createElement('span');
          span.textContent = label;

          const italicizedX = document.createElement('i');
          italicizedX.textContent = 'X';

          italicizedX.addEventListener('click', function () {
            span.remove();
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
          });

          span.appendChild(italicizedX);
          selectedParagraph.appendChild(span);

          if (index < selectedTexts.length - 1) {
            selectedParagraph.appendChild(document.createTextNode(' '));
          }
        });
      }
    });
  }

  ///

});




document.addEventListener('DOMContentLoaded', function () {
  const primaryFilterCheckboxes = document.querySelectorAll('.primary-filter .multi-filter-checkbox');
  const conferenceTypeCheckboxes = document.querySelectorAll('.secondary-filter .multi-filter-checkbox');
  const conferenceTypeSection = document.querySelectorAll('.secondary-filter');
  const clearButton = document.querySelectorAll('.selected-p');
  const contents = document.querySelectorAll('.agenda-masonry');

  function updateConferenceTypeVisibility() {

    // Collect checked values from primary filter
    const checkedValues = [];
    primaryFilterCheckboxes.forEach(function (checkbox) {

      if (checkbox.checked) {
        const filterValues = checkbox.getAttribute('data-access-pass').split(',').map(value => value.trim());
        checkedValues.push(...filterValues);
      }
    });

    // Show checkboxes in conference type based on checked values
    // conferenceTypeCheckboxes.forEach(function (conferenceCheckbox) {
    //   const conferenceValue = conferenceCheckbox.getAttribute('data-access-pass');
    //   if (checkedValues.some(value => conferenceValue.includes(value))) {
    //     conferenceCheckbox.closest('li').style.display = 'block';
    //     conferenceCheckbox.closest('li').classList.add('shown');
    //   } else {
    //     conferenceCheckbox.closest('li').style.display = 'none';
    //     conferenceCheckbox.closest('li').classList.remove('shown');
    //   }

    // });



    let isAnyCheckboxChecked = false;
    primaryFilterCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isAnyCheckboxChecked = true;
      }
    });

    // Add or remove the 'disabled' class based on whether any checkbox is checked
    // conferenceTypeSection.forEach(function (section) {
    //   if (isAnyCheckboxChecked) {
    //     section.classList.remove('disabled');
    //   } else {
    //     section.classList.add('disabled');
    //   }
    // });
  }

  // Event listener for primary filter checkboxes
  primaryFilterCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', updateConferenceTypeVisibility);
  });

  // Event listener for clear buttons
  clearButton.forEach(function (button) {
    button.addEventListener('click', function () {

      updateConferenceTypeVisibility();

      contents.forEach(function (content) {
        content.classList.remove('hidden');
      });
    });
  });

  // Initial update based on checked checkboxes
  updateConferenceTypeVisibility();

  // Remove 'hidden' class from agenda-masonry after a short delay

  contents.forEach(function (content) {
    content.classList.remove('hidden');
  });

});

document.addEventListener('DOMContentLoaded', function () {
  // Get the reset button
  const resetButton = document.getElementById('resetFilters');

  // Function to uncheck all checkboxes
  function uncheckAllCheckboxes() {
    // Select all checkboxes with the class '.multi-filter-checkbox'
    const checkboxes = document.querySelectorAll('.multi-filter-checkbox');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.checked = false; // Uncheck the checkbox
        checkbox.dispatchEvent(new Event('change')); // Trigger change event
      }
    });
  }

  // Attach event listener to the reset button
  if (resetButton) {
    resetButton.addEventListener('click', uncheckAllCheckboxes);
  }
});


var $filterCheckboxes = $('.multi-filter-checkbox');
var filterFunc = function () {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function () {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);
  });

  var $filteredResults = $('.agenda-masonry');

  $.each(selectedFilters, function (name, filterValues) {

    $filteredResults = $filteredResults.filter(function () {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      $.each(currentFilterValues, function (_, currentFilterValue) {


        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      return matched;

    });
  });

  $('.agenda-masonry').hide().filter($filteredResults).show();
}

$filterCheckboxes.on('change', filterFunc);

////////////////////////////////// Conference Agenda filter V2 Ends ////////////////////////////////////////


// filter commented end 

function adjustMasonryHeight() {
  document.querySelectorAll('.agenda-accordion-row').forEach(row => {
    // Find all .agenda-masonry elements in this row
    const masonryItems = row.querySelectorAll('.agenda-masonry');

    // Reset heights to auto for recalculation
    masonryItems.forEach(item => {
      item.style.height = 'auto';
    });

    // Find the tallest .agenda-masonry element
    let maxHeight = 0;
    masonryItems.forEach(item => {
      const height = item.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Set the height of all .agenda-masonry elements to the tallest height
    masonryItems.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  });
}

// Adjust masonry heights on load
adjustMasonryHeight();

// Adjust masonry heights on window resize
window.addEventListener('resize', () => {
  adjustMasonryHeight();
});



//Accordion starts
function initializeAccordion(accordionSelector, headerSelector, activeClass) {
  const accordionItems = document.querySelectorAll(accordionSelector);
  accordionItems
    ? accordionItems.forEach((item) => {
      const header = item.querySelector(headerSelector);
      const accordionContent = item.querySelector(".accordion-content");

      // Check if the item already has the active class
      if (item.classList.contains(activeClass)) {
        const contentHeight = accordionContent.querySelector(
          ".accordion-content__wrapper"
        ).scrollHeight;
        accordionContent.style.height = `${contentHeight}px`;
      } else {
        accordionContent.style.height = 0;
      }

      header.addEventListener("click", () => {
        const contentHeight = accordionContent.scrollHeight;

        // Toggle active class to expand/collapse accordion item
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass);
          accordionContent.style.height = 0;
        } else {
          item.classList.add(activeClass);
          accordionContent.style.height = `${contentHeight}px`;

          // Hide other accordion items if clicked item is expanded
          accordionItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains(activeClass)) {
              otherItem.classList.remove(activeClass);
              otherItem.querySelector(".accordion-content").style.height = 0;
            }
          });
        }
      });
    })
    : null;
}






//Accordion starts
function initializeAccordionCategory(accordionSelector, headerSelector, activeClass) {
  const accordionItems = document.querySelectorAll(accordionSelector);

  accordionItems.forEach((item) => {
    const header = item.querySelector(headerSelector);

    header.addEventListener("click", () => {
      // Toggle active class to expand/collapse accordion item
      item.classList.toggle(activeClass);

      // Hide other accordion items if clicked item is expanded
      if (item.classList.contains(activeClass)) {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains(activeClass)) {
            otherItem.classList.remove(activeClass);
          }
        });
      }
    });
  });
}

// Usage
initializeAccordion(".accordion-card", ".accordion-head", "active");

// FAQ Filter starts 
const filterTag = document.querySelectorAll('.filter-tag');
const filterItems = document.querySelectorAll('.accrodian__row');
const resetButtonFaq = document.querySelectorAll('.reset-filter');

// Function to show all items
function showAllFilterItems() {
  filterItems.forEach(item => {
    item.style.display = 'block';
  });
  // Remove active class from all filter tags
  filterTag.forEach(tag => {
    tag.classList.remove('active');
  });
}

// Function to filter items and scroll to the filter tag
function filterItemsBy(filterValue) {
  // Remove active class from all filter tags
  filterTag.forEach(tag => {
    tag.classList.remove('active');
  });

  // Add active class to the filter tag with matching data-filter
  const activeFilterTag = document.querySelector(`.filter-tag[data-filter="${filterValue}"]`);
  if (activeFilterTag) {
    activeFilterTag.classList.add('active');

  }

  // Loop through all items
  filterItems.forEach(item => {
    const categories = item.getAttribute('data-category').split(',');
    if (categories.includes(filterValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Add click event listener to each filterTag
if (filterTag) {
  filterTag.forEach(filter => {
    filter.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');
      filterItemsBy(filterValue);
    });
  });
}

if (resetButtonFaq) {
  resetButtonFaq.forEach(button => {
    button.addEventListener('click', showAllFilterItems);
  });
}









document.addEventListener("DOMContentLoaded", function () {
  // Get the query string after '?' in the URL (e.g., "tab-1", "tab-2")
  const queryValue = window.location.search.substring(1); // removes '?'
console.log(queryValue);
  if (queryValue) {
      // Remove existing 'active' classes
      document.querySelectorAll(".conference-topic-detail .agenda-tab-navs").forEach((nav) => {
          nav.classList.remove("active");
      });

      document.querySelectorAll(".conference-topic-detail .agenda-tab-content").forEach((content) => {
          content.classList.remove("active");
      });

      // Add 'active' class if data-tab matches query value
      const matchingNavs = document.querySelectorAll(`.conference-topic-detail .agenda-tab-navs[data-tab="${queryValue}"]`);
      matchingNavs.forEach((nav) => nav.classList.add("active"));

      // Add 'active' class to corresponding agenda-tab-content
      const matchingContent = document.getElementById(queryValue);
      if (matchingContent) {
          matchingContent.classList.add("active");
      }
  }
});


document.addEventListener("DOMContentLoaded", function () {
var button = document.getElementById("filter-button");
var container = document.getElementById("filter-container");
var input = document.querySelectorAll(".agenda-filter-box input");

button.onclick = function (e) {
  e.stopPropagation();
  if (container.classList.contains("filters--active")) {
    container.classList.remove("filters--active");
  } else {
    container.classList.add("filters--active");
  }
};

container.onclick = function (e) {
  e.stopPropagation();
};

window.onclick = function () {
  container.classList.remove("filters--active");
};

console.log(input);

for (var i = 0; i < input.length; i++) {
  var currentInput = input[i];

  currentInput.onclick = function () {
    var isChecked = false;
    for (var j = 0; j < input.length; j++) {
      if (input[j].checked) {
        isChecked = true;
        break;
      }
    }

    if (isChecked) {
      button.classList.add("button--highlight");
    } else {
      button.classList.remove("button--highlight");
    }
  };
}
});

// Select the slider element
const speakerSliderEl = document.querySelector('.speakers-slider');

// Check if the element has the 'three-col-speaker-slider' class
const isThreeCol = speakerSliderEl.classList.contains('three-col-speaker-slider');

// Define breakpoints based on the presence of the class
const breakpointsConfig = isThreeCol
  ? {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
    }
  : {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 5,
      },
    };

// Initialize Swiper with dynamic breakpoints
var speakerSlider = new Swiper(".speakers-slider", {
  loop: true,
  speed: 4000,
  spaceBetween: 20,
  autoplay: {
    delay: 0,
  },
  breakpoints: breakpointsConfig,
});


//PopUp Banner
const closeButtonsRegister = document.querySelectorAll(".home-popup .close-btn");
const homePopup = document.querySelector(".home-popup");
const body = document.querySelector("body");
if (homePopup) {
  body.classList.add('o-hidden');
}
function closehomePopup() {
  if (homePopup) {
    homePopup.style.display = "none";
     body.classList.remove('o-hidden');
  }
}
if (closeButtonsRegister.length > 0) {
  closeButtonsRegister.forEach((button) => {
    button.addEventListener("click", closehomePopup);
  });
}