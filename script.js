

$(document).ready(function() {

    $(function() {
        $.scrollify({
            section : ".panel",
            sectionName : "section-name",
            interstitialSection : "footer",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    });
   

    // ================================================      Navbar       ===========================================================
    $(".toggler-btn").on("click", function(e){
        e.preventDefault();
        $(".bar-inner").removeClass("animate-nav-close");
        $(".bar-inner").addClass("animate-nav");
        setTimeout(function() 
            {
                $(".collapse-list").removeClass("hidden");
                $(".collapse-list").css("display", "flex");
            }, 300
        );
    });

    $(".close-btn").on("click", function(e) {
        e.preventDefault();
        $(".bar-inner").removeClass("animate-nav");
        $(".collapse-list").addClass("hidden");
        setTimeout(
            function() 
            {
                
                $(".bar-inner").addClass("animate-nav-close");
            }, 10);
        
    });

    // ================================================      Popup       ===========================================================
    // =======================  Myko Minions

    $(".myko").on("click", function(e){
        e.preventDefault();
        $(".myko").removeClass("animate-popup-close");
        $(".myko").addClass("animate-popup");
        setTimeout(function() 
            {
                $(".popup-myko").removeClass("hidden");
                $(".popup-myko").css("display", "flex");
            }, 400
        );
    });

    $(".close-btn-popup").on("click", function(e) {
        e.preventDefault();
        $(".popup-myko").addClass("hidden");
        setTimeout(
            function() 
            {
                $(".myko").removeClass("animate-popup");
                $(".myko").addClass("close-myko");
            }, 500);
        setTimeout(
            function() 
            {
                $(".myko").removeClass("close-myko");
            }, 1000);    
    });

    // =======================  English Teacher
    $(".english").on("click", function(e){
        e.preventDefault();
        $(".english").removeClass("animate-popup-close");
        $(".english").addClass("animate-popup");
        setTimeout(function() 
            {
                $(".popup-english").removeClass("hidden");
                $(".popup-english").css("display", "flex");
            }, 400
        );
    });

    $(".close-btn-popup").on("click", function(e) {
        e.preventDefault();
        $(".popup-english").addClass("hidden");
        setTimeout(
            function() 
            {
                $(".english").removeClass("animate-popup");
                $(".english").addClass("cose-english");
            }, 500);
        setTimeout(
            function() 
            {
                $(".english").removeClass("close-eglish");
            }, 1000);    
    });

    //  ===================================================       ScrollingDown - Nav       ============================================
    var scrollNav = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > scrollNav){
            $(".navigation").css("position", "absolute");
        } else {
            $('.navigation').css('position', 'fixed');
        }
        scrollNav = st;
    });

    // //  ===================================================       Scrolling        ============================================
    var withinViewport = (function() {
        'use strict';
      
        if (window.requestAnimationFrame && document.documentElement.classList) {
      
          // Passes the test so add enhanced class to HTML tag
          document.documentElement.classList.add('enhanced');
      
          // Throttle
          // https://underscorejs.org/#throttle
          var throttle = function(func, wait, options) {
            var _ = {
              now: Date.now || function() {
                return new Date().getTime();
              }
            };
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) {
              options = {};
            }
            var later = function() {
              previous = options.leading === false ? 0 : _.now();
              timeout = null;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            };
            return function() {
              var now = _.now();
              if (!previous && options.leading === false) {
                previous = now;
              }
              var remaining = wait - (now - previous);
              context = this;
              args = arguments;
              if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) {
                  context = args = null;
                }
              } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
              }
              return result;
            };
          };
          
          // requestAnimationFrame
          // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
          var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      
          // Global class for revealing element
          var revealer = document.querySelectorAll('.revealer');


          //For social icons in footer
          var si1 = document.querySelectorAll('.si-1');
          var si2 = document.querySelectorAll('.si-2');
          var si3 = document.querySelectorAll('.si-3');
          var si4 = document.querySelectorAll('.si-4');
      
          // Get the viewport (window) dimensions
          var getViewportSize = function() {
            return {
              width: window.document.documentElement.clientWidth,
              height: window.document.documentElement.clientHeight
            };
          };
      
          // Get the current scoll position
          var getCurrentScroll = function() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          };
      
          // Get element dimensions and position
          var getElemInfo = function(elem) {
            var offsetTop = 0;
            var offsetLeft = 0;
            var offsetHeight = elem.offsetHeight;
            var offsetWidth = elem.offsetWidth;
      
            do {
              if (!isNaN(elem.offsetTop)) {
                offsetTop += elem.offsetTop;
              }
              if (!isNaN(elem.offsetLeft)) {
                offsetLeft += elem.offsetLeft;
              }
            } while ((elem = elem.offsetParent) !== null);
      
            return {
              top: offsetTop,
              left: offsetLeft,
              height: offsetHeight,
              width: offsetWidth
            };
          };
      
          // Check visibility of the element in the viewport
          var checkVisibility = function(elem) {
            var viewportSize = getViewportSize();
            var currentScroll = getCurrentScroll();
            var elemInfo = getElemInfo(elem);
            var spaceOffset = 0.2;
            var elemHeight = elemInfo.height;
            var elemWidth = elemInfo.width;
            var elemTop = elemInfo.top;
            var elemLeft = elemInfo.left;
            var elemBottom = elemTop + elemHeight;
            var elemRight = elemLeft + elemWidth;
      
            var checkBoundaries = function() {
              // Defining the element boundaries and extra space offset
              var top = elemTop + elemHeight * spaceOffset;
              var left = elemLeft + elemWidth * spaceOffset;
              var bottom = elemBottom - elemHeight * spaceOffset;
              var right = elemRight - elemWidth * spaceOffset;
      
              // Defining the window boundaries and window offset
              var wTop = currentScroll.y + 0;
              var wLeft = currentScroll.x + 0;
              var wBottom = currentScroll.y - 0 + viewportSize.height;
              var wRight = currentScroll.x - 0 + viewportSize.width;
      
              // Check if the element is within boundary
              return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
            };
      
            return checkBoundaries();
          };
      
          // Run a loop with checkVisibility() and add / remove classes to the elements
          var toggleElement = function() {
            for (var i = 0; i < revealer.length; i++) {
              if (checkVisibility(revealer[i])) {
                revealer[i].classList.add('animate-7');
              } else {
                revealer[i].classList.remove('animate-7');
              }
            }
          };


        //   for social icons in footer
          var toggleElement1 = function() {
            for (var i = 0; i < si1.length; i++) {
              if (checkVisibility(si1[i])) {
                si1[i].classList.add('animate-3');
                si2[i].classList.add('animate-4');
                si3[i].classList.add('animate-5');
                si4[i].classList.add('animate-6');
              } else {
                si1[i].classList.remove('animate-3');
                si2[i].classList.remove('animate-4');
                si3[i].classList.remove('animate-5');
                si4[i].classList.remove('animate-6');
              }
            }
          };

          var toggleElement2 = function() {
            for (var i = 0; i < revealer.length; i++) {
              if (checkVisibility(revealer[i])) {
                revealer[i].classList.add('animate-8');
              } else {
                revealer[i].classList.remove('animate-8');
              }
            }
          };
     
      
          // Throttle events and requestAnimationFrame
          var scrollHandler = throttle(function() {
            _requestAnimationFrame(toggleElement);
            _requestAnimationFrame(toggleElement1);
            _requestAnimationFrame(toggleElement2);
          }, 300);
      
          var resizeHandler = throttle(function() {
            _requestAnimationFrame(toggleElement);
            _requestAnimationFrame(toggleElement1);
            _requestAnimationFrame(toggleElement2);
      
            // For demo purposes only
            fullscreenIntro();
          }, 300);
      
          scrollHandler();
      
          // Listening for events
          if (window.addEventListener) {
            addEventListener('scroll', scrollHandler, false);
            addEventListener('resize', resizeHandler, false);
          } else if (window.attachEvent) {
            window.attachEvent('onscroll', scrollHandler);
            window.attachEvent('onresize', resizeHandler);
          } else {
            window.onscroll = scrollHandler;
            window.onresize = resizeHandler;
          }
      
        }


        // Makes fullscreen intro on any device so user is forced to scroll
        var fullscreenIntro = function() {
            var fullscreen = document.querySelectorAll('.fullscreen');
            for (var i = 0; i < fullscreen.length; i++) {
              fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
            }
          };
          fullscreenIntro();
        
          return withinViewport;
        
    }());


    // Text effect
    $('.sectionOneAnimation').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline().add({
        targets: '.sectionOneAnimation .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: function(el, i) {
            return 70*i;
        }
    });

})


