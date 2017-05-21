$(document).ready(function(){


  $('#fullpage').fullpage({
    sectionsColor: ['#fff', '#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
  });

  $('#owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    /*nav: true,*/
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    mouseDrag : false,
    touchDrag : false,
    // // move navContainer outside the primary owl wrapper
    // navContainer: '#customNav',
    // move dotsContainer outside the primary owl wrapper
    dotsContainer: '.customDots',
    animateOut: 'fadeOut'
  });

  var page2Carousel = $(".page2Carousel");
  /*********** Слайдер 2-я страница ***********/
  $("#page2Carousel").owlCarousel({
    items: 3,
    // dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    mouseDrag : true,
    touchDrag : true,
    margin: 40,
    baseClass : "page2Carousel",
    autoHeight : false,
    navText:false,
    // // move navContainer outside the primary owl wrapper
    // navContainer: '#customNav',
    // move dotsContainer outside the primary owl wrapper
    navContainer: '.customNav',
    // navClass: '.customNav2page',
    // navElement: 'div class="customNav"> </div'
    // animateOut: 'fadeOut'
  });

  $("#page2Carousel2").owlCarousel({
    items: 3,
    // dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    mouseDrag : true,
    touchDrag : true,
    margin: 40,
    baseClass : "page2Carousel",
    autoHeight : false,
    navText:false,
    // // move navContainer outside the primary owl wrapper
    // navContainer: '#customNav',
    // move dotsContainer outside the primary owl wrapper
    navContainer: '.customNav2',
    // navClass: '.customNav2page',
    // navElement: 'div class="customNav"> </div'
    // animateOut: 'fadeOut'
  });

  $("#page2Carousel3").owlCarousel({
    items: 3,
    // dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    mouseDrag : true,
    touchDrag : true,
    margin: 40,
    baseClass : "page2Carousel",
    autoHeight : false,
    navText:false,
    // // move navContainer outside the primary owl wrapper
    // navContainer: '#customNav',
    // move dotsContainer outside the primary owl wrapper
    navContainer: '.customNav3',
    // navClass: '.customNav2page',
    // navElement: 'div class="customNav"> </div'
    // animateOut: 'fadeOut'
  });

    $("#page2CarouselCorset").owlCarousel({
    items: 3,
    // dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    mouseDrag : true,
    touchDrag : true,
    margin: 40,
    baseClass : "page2Carousel3",
    autoHeight : false,
    navText:false,
    // // move navContainer outside the primary owl wrapper
    // navContainer: '#customNav',
    // move dotsContainer outside the primary owl wrapper
    navContainer: '.customNavCorset',
    // navClass: '.customNav2page',
    // navElement: 'div class="customNav"> </div'
    // animateOut: 'fadeOut'
  });




  var topHeader__left = $(".topHeader__left");


  $(topHeader__left).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeInLeft',
    offset: 1
  });

  var mainScreenLeft__wrapper = $(".mainScreenLeft__wrapper");
  $(mainScreenLeft__wrapper).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeInLeft',
    offset: 1
  });

  var customDots = $(".customDots");
  $(customDots).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeIn',
    offset: 1
  });

  var openMenuButton = $(".openMenuJs");
  $(openMenuButton).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeInRight',
    offset: 1
  });

  //   var openMenuButton2 = $(".openMenuJs2");
  // $(openMenuButton2).addClass("hid").viewportChecker({
  //   classToAdd: 'vis animated fadeInRight',
  //   offset: 50
  // });


  var textmainRight = $(".textmainRight");
  $(textmainRight).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeInRight',
    offset: 1
  });

  var mainScreenRight__wrapperCircle = $(".circleMain");
  $(mainScreenRight__wrapperCircle).addClass("hid").viewportChecker({
    classToAdd: 'vis animated fadeIn',
    offset: 1
  });





  var buttonOpenMenu = $(".openMenuJs")
  var buttonCloseMenu = $(".closeMenuJs")
  var buttonOpenMenu2 = $(".openMenuJs2")
  var buttonCloseMenu2 = $(".closeMenuJs2")

  var menu = $(".topHeader__right--OpenMenu");
  $(menu).hide();
  $(buttonCloseMenu).hide();  
  $(buttonOpenMenu).on("click", function(){
    $(menu).fadeIn();
    $(buttonOpenMenu).hide();
    $(buttonCloseMenu).fadeIn();

  });

  $(buttonCloseMenu).on("click", function(){
    $(menu).hide();
    $(buttonCloseMenu).hide();
    $(buttonOpenMenu).removeClass("fadeInRight").fadeIn();
  });


  var menu2 = $(".topHeader__right--OpenMenu2");
  $(menu2).hide();
  $(buttonCloseMenu2).hide();  
  $(buttonOpenMenu2).on("click", function(){
    $(menu2).fadeIn();
    $(buttonOpenMenu2).hide();
    $(buttonCloseMenu2).fadeIn();

  });

  $(buttonCloseMenu2).on("click", function(){
    $(menu2).hide();
    $(buttonCloseMenu2).hide();
    $(buttonOpenMenu2).removeClass("fadeInRight").fadeIn();
  });



  /*************************************************/
  var mainScreenCenterText = $(".mainScreenCenterText");

  $.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
    });
   });
  };
  $(mainScreenCenterText).show();
  $(mainScreenCenterText).animate_Text();
  var signUpAndSignIn = $(".signUpAndSignIn");
  var OpenMenuMainContent = $(".OpenMenuMain__content");
  var OpenMenuForm = $(".OpenMenu__form");
  var contentSignIn = $(".contentSignIn");
  var contentSignUp = $(".contentSignUp");
  var toogleForm = $(".toogleForm");
  $(contentSignUp).hide();
  var hideContentSignIn= $(".hideContentSignIn");
  var hideContentSignUp= $(".hideContentSignUp");

  $(hideContentSignIn).on("click", function(e){
    event.preventDefault();
    contentSignIn.hide();
    contentSignUp.fadeIn();
  });
  
  $(OpenMenuForm).hide();
  $(signUpAndSignIn).on("click", function(){
    $(OpenMenuMainContent).hide();
    $(OpenMenuForm).fadeIn();
  });


  $(hideContentSignUp).on("click", function(e){
    event.preventDefault();
    contentSignUp.hide();
    contentSignIn.fadeIn();
  });
  var hideForm = $(".hideForm");
  $(hideForm).on("click", function(){
    $(OpenMenuForm).hide();
    $(OpenMenuMainContent).fadeIn();
  });
  var pass = $(".pass1");
  var replPass = $(".pass2");
  var twoPass = $(".passSu");
  var signUpButton = $(".signUpButton");
  var formSignUp = $(".formSignUp");
  var blockEmailSu = $(".blockEmailSu");
  var emailSu = $(".emailSu");

  $(signUpButton).on("click", function(e){
    e.preventDefault();
    if (pass.val() != replPass.val() || !emailSu.val() || !pass.val() || !replPass.val() ){
      console.log("false");

      $(twoPass).removeClass("passValid").addClass("passInvalid");
      $(blockEmailSu).removeClass("emailValid").addClass("emailInvalid");
      
      return false;
    }else{
      console.log("true");
      $(twoPass).addClass("passValid");
      $(blockEmailSu).addClass("passValid");
      $(formSignUp).submit();
      return true}
    });

  /*табы*/
  var tabMenu = $(".tab-menu");
  var tabItem = $(".tab-item");
  $(".tab-item").hide();
  $('.tab-item:first').show();
  $(tabMenu).click(function(e) {
    event.preventDefault();
    $(".mainPageCenterContent, .wrapper__media ").fadeOut();
    $(tabMenu).removeClass("active-panel").eq($(this).index()).addClass("active-panel");
    $(tabItem).hide().eq($(this).index()).fadeIn()
  }).eq().addClass("active-panel"); 


  var tab1ContentMenu__wrapper = $(".tab1ContentMenu__wrapper");
  var tab1Content__item = $(".tab1Content__item");
  function hideTab1Content__item(){
    $(tab1Content__item).on("click",function(){
      $(tab1ContentMenu__wrapper).hide();
      $(tab1ProductWrapper).fadeIn();
    });

  }
  

  var tab1Content__item1 = $(".tab1Content__item1");
  var tab1Content__item2 = $(".tab1Content__item2");
  var tab1Content__item3 = $(".tab1Content__item3");

  var tab1ProductWrapperItem1 = $(".tab1ProductWrapper--item1");
  var tab1ProductWrapperItem2 = $(".tab1ProductWrapper--item2");
  var tab1ProductWrapperItem3 = $(".tab1ProductWrapper--item3");
  var tab1ProductWrapper = $(".tab1ProductWrapper");
  $(tab1ProductWrapper).hide();

  $(tab1ProductWrapper).on("click",function() {
    if (tab1ProductWrapper.is(":visible")) {
      $(".centerContent__wrapper--right").css("border", "1px solid #e0e0e0;")
    }else{
     $(".centerContent__wrapper--right").css("border", "0")
   };
 });

  $(tab1Content__item1).on("click",hideTab1Content__item(),function(){
    $(tab1Content__item).hide();
    $(tab1ProductWrapperItem3).hide();
    $(tab1ProductWrapperItem2).hide();
    $(tab1ProductWrapperItem1).fadeIn();
    console.log("1")
  });

  $(tab1Content__item2).on("click",hideTab1Content__item(),function(){
    $(tab1ProductWrapperItem1).hide();
    $(tab1ProductWrapperItem3).hide();
    $(tab1ProductWrapperItem2).fadeIn();
    console.log("2")
  });

  $(tab1Content__item3).on("click",hideTab1Content__item(),function(){
   $(tab1ProductWrapperItem1).hide();
   $(tab1ProductWrapperItem2).hide();
   $(tab1ProductWrapperItem3).fadeIn();
   console.log("3")
 });





  var Page2ButtonBack = $(".2PageButtonBack");
  $(Page2ButtonBack).on("click",function(e){
    e.preventDefault();
    $(tab1ProductWrapper).hide();
    $(tab1ContentMenu__wrapper).fadeIn();
    $(tab1Content__item).fadeIn();
    

  });






});
// checker **************************************************

(function($){
  $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
          classToAdd: 'visible',
          classToRemove : 'invisible',
          classToAddForFullView : 'full-visible',
          removeClassAfterAnimation: false,
          offset: 100,
          repeat: false,
          invertBottomOffset: true,
          callbackFunction: function(elem, action){},
          scrollHorizontal: false,
          scrollBox: window
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
        boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()},
        scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1) ? 'body' : 'html');

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
         this.checkElements = function(){
          var viewportStart, viewportEnd;

            // Set some vars to check with
            if (!options.scrollHorizontal){
              viewportStart = $(scrollElem).scrollTop();
              viewportEnd = (viewportStart + boxSize.height);
            }
            else{
              viewportStart = $(scrollElem).scrollLeft();
              viewportEnd = (viewportStart + boxSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function(){
              var $obj = $(this),
              objOptions = {},
              attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                  attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                  attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                  attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                  attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                  attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                  attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                  attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                  attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.data('vp-animated') && !objOptions.repeat){
                  return;
                }

                // Check if the offset is percentage based
                if (String(objOptions.offset).indexOf("%") > 0)
                  objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

                // Get the raw start and end positions
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

                // Add the defined offset
                var elemStart = Math.round( rawStart ) + objOptions.offset,
                elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if (objOptions.invertBottomOffset)
                  elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                    // Remove class
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                    // Check if full element is in view
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                      $obj.addClass(objOptions.classToAddForFullView);
                    else
                      $obj.removeClass(objOptions.classToAddForFullView);

                    // Set element as already animated
                    $obj.data('vp-animated', true);

                    if (objOptions.removeClassAfterAnimation) {
                      $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $obj.removeClass(objOptions.classToAdd);
                      });
                    }

                // Remove class if not in viewport and repeat is true
              } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");

                    // Remove already-animated-flag
                    $obj.data('vp-animated', false);
                  }
                });

};

        /**
         * Binding the correct event listener is still a tricky thing.
         * People have expierenced sloppy scrolling when both scroll and touch
         * events are added, but to make sure devices with both scroll and touch
         * are handles too we always have to add the window.scroll event
         *
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
         */

        // Select the correct events
        if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
            // Device with touchscreen
            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
          }

        // Always load on window load
        $(options.scrollBox).bind("load scroll", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
          boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
          $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
      };
    })(jQuery);


