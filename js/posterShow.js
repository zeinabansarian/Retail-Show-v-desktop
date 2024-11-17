const mainPosterSlider = new Swiper('.mainPosterSlider', {
    // Optional parameters
    autoplay:{
        delay:3000,
    },
    speed:1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
        el: '.pagination1',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (total>10) {
                if (current>9) {
                    
                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 

                }
            }
            else{
                if (current>9) {

                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
    
                }

            }
          
        }
      },
    // If we need pagination
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextMain',
      prevEl: '.prevMain',
    },
  
  
  });


  

jQuery('.openPara').readmore({
    speed: 100,
    collapsedHeight:45,
    moreLink: '<button class="readMoreBtn"> <span>+</span> بیشتر</button>',
    lessLink: '<button class="readMoreBtn"> <span>-</span> کمتر</button>',
    heightMargin: 16,
    afterToggle: function(trigger, element, expanded) {
        
        // if(! expanded) { // The "Close" link was clicked
        //   $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
        // }
      },
});

  

const branSlider = new Swiper('.branSlider', {
    // Optional parameters
    loop: true,
    slidesPerView:5,
    speed:1000,
    spaceBetween : 51,
    autoplay:{
        delay:0,
    }
  });

const rightSlider = new Swiper('.rightSlider', {
    // Optional parameters
 speed:1000,
 loop:true,
 pagination: {
    el: '.paginRigt',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
        if (total>10) {
            if (current>9) {
                
                return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 
            }
            else{

                return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 

            }
        }
        else{
            if (current>9) {

                return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
            }
            else{

                return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 

            }

        }
      
    }
  },

  navigation: {
    nextEl: '.prevRight',
    prevEl: '.nextRight',
  },
  });
const leftSlider = new Swiper('.leftSlider', {
    // Optional parameters
 speed:1000,
 slidesPerView:1.3,
 loop:true,
 spaceBetween: 20,

  });
  
  rightSlider.controller.control = leftSlider;
  leftSlider.controller.control = rightSlider;


  const videoSlider = new Swiper('.videoSlider', {
      // Optional parameters
   speed:1000,
   slidesPerView:1.4,
   spaceBetween: 30,
   pagination: {
    el: '.videoSliderpagination',
    clickable:true,
  },
    });
  const imgSlider = new Swiper('.imgSlider', {
      // Optional parameters
   speed:1000,
   slidesPerView:1.4,
   spaceBetween: 34,
  
    });
  const planSlider = new Swiper('.planSlider', {
      // Optional parameters
   speed:1000,
   slidesPerView:3.5,
   spaceBetween: 18,
  
    });


