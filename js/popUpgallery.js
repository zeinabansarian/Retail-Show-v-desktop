let closePop = document.querySelector(".closePop")
let closeImgPop = document.querySelector(".closeImgPop")
let popUpVideoGalleryContainer = document.querySelector(".popUpVideoGalleryContainer")
let popUpImgGalleryContainer = document.querySelector(".popUpImgGalleryContainer")
let openGallery = document.querySelectorAll(".openGallery")
let openPopGallery = document.querySelectorAll(".openPopGallery")
let openGalleryPop = document.querySelectorAll(".openGalleryPop")
let openImgGallery = document.querySelectorAll(".openImgGallery")
let sGallery = document.querySelector(".sGallery")
let popUpVideo = document.querySelector(".popUpVideo")
let closeSlider = document.querySelector(".closeSlider")
let closeImgSlider = document.querySelector(".closeImgSlider")
let fThumb = document.querySelector(".fThumb")
let sImgGallery = document.querySelector(".sImgGallery")
let fImgThumb = document.querySelector(".fImgThumb")
let closepopUpVideo = document.querySelector(".closepopUpVideo")
let playVideoOpen = document.querySelector(".playVideoOpen")
let body = document.querySelector("body")
let galleryFlag=true;
let zoomMin =0.5;
let zoomMax =1.7;
let currZoom = 1;
let curRotate = 0;
let zoomIn = document.querySelector(".zoomIn")
let rotateRight = document.querySelector(".rotateRight")
let rotateLeft = document.querySelector(".rotateLeft")
let zoomOut = document.querySelector(".zoomOut")
let sGalleryFlag = true;
let thumbBox = document.querySelectorAll(".thumbBox")
let thumbImgBox = document.querySelectorAll(".thumbImgBox")
let openVideoGallery = document.querySelectorAll(".openVideoGallery")
const popSlider = new Swiper('.popSlider', {
    // Optional parameters

    loop: true,
    slidesPerView:1,
    speed:1000,

    centeredSlides:true,
    navigation: {
        nextEl: '.nextPop',
        prevEl: '.prevPop',
      },

    pagination: {
        el: '.popSliderFraction',
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
  });
const popImgSlider = new Swiper('.popImgSlider', {
    // Optional parameters

    loop: true,
    slidesPerView:1,
    speed:1000,

    centeredSlides:true,
    navigation: {
        nextEl: '.nextImgPop',
        prevEl: '.prevImgPop',
      },

    pagination: {
        el: '.popSliderFraction',
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
  });



  popImgSlider.on('slideChange', function () {
    let imgs = document.querySelectorAll(".popSlider img")
    imgs.forEach(element => {
        element.style.scale="1";
        element.style.rotate="0";
         zoomMin =0.5;
         zoomMax =1.7;
         currZoom = 1;
         curRotate = 0;
    });
  });


  openGalleryPop.forEach(element => {
    element.addEventListener("click" , function (params) {
        if (galleryFlag) {
            
            fThumb.classList.add("popOpen")
            popUpVideoGalleryContainer.classList.add("popOpen")
            galleryFlag=!galleryFlag
            body.style.overflow="hidden"
        }
        
    })
});

openPopGallery.forEach(element => {
    element.addEventListener("click" , function (params) {
        if (galleryFlag) {
            
            fImgThumb.classList.add("popOpen")
            popUpImgGalleryContainer.classList.add("popOpen")
            galleryFlag=!galleryFlag
            body.style.overflow="hidden"
        }
        
    })
});

closePop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpVideoGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto"

    }
})
closeImgPop.addEventListener("click",function (params) {
    if (!galleryFlag) {
                    popUpImgGalleryContainer.classList.remove("popOpen")
                    galleryFlag=!galleryFlag
                    body.style.overflow="auto"

    }
})


for (let i = 0; i < thumbBox.length; i++) {
    const element = thumbBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popSlider.slideTo(i+1,0)
                sGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpVideoGalleryContainer.scrollTo(0,0)
                popUpVideoGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
for (let i = 0; i < thumbImgBox.length; i++) {
    const element = thumbImgBox[i];
  
        element.addEventListener("click" ,function (params) {
            if (sGalleryFlag) {
                
                popImgSlider.slideTo(i+1,0)
                sImgGallery.classList.add("popOpen")
                sGalleryFlag=!sGalleryFlag
                popUpImgGalleryContainer.scrollTo(0,0)
                popUpImgGalleryContainer.style.overflow="hidden"
                
            }
        } )
        
    }
    closeSlider.addEventListener("click",function(params) {
        sGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpVideoGalleryContainer.style.overflow="auto"
    })
    closeImgSlider.addEventListener("click",function(params) {
        sImgGallery.classList.remove("popOpen")
        sGalleryFlag=!sGalleryFlag
        popUpImgGalleryContainer.style.overflow="auto"
    })


    openVideoGallery.forEach((element,i) => {

        let newElem =  element.querySelector(".playbtn");
        
        
       newElem.addEventListener("click",function(params) {
        let newI = element.getAttribute("data-swiper-slide-index")
        console.log(newI);
        
            if (galleryFlag && sGalleryFlag) {
                
                fThumb.classList.add("popOpen")
                popUpVideoGalleryContainer.classList.add("popOpen")
                sGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                
                    popSlider.slideTo(newI+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpVideoGalleryContainer.scrollTo(0,0)
                    popUpVideoGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });

    openImgGallery.forEach((element,i) => {

        
        
       element.addEventListener("click",function(params) {
       
        
            if (galleryFlag && sGalleryFlag) {
                
                fImgThumb.classList.add("popOpen")
                popUpImgGalleryContainer.classList.add("popOpen")
                sImgGallery.classList.add("popOpen")
                galleryFlag=!galleryFlag
                body.style.overflow="hidden"
                
                    popSlider.slideTo(i+1,0)
                    sGalleryFlag=!sGalleryFlag
                    popUpImgGalleryContainer.scrollTo(0,0)
                    popUpImgGalleryContainer.style.overflow="hidden"
                
            }
            
        })
    });






    playVideoOpen.addEventListener("click" , function (params) {
        popUpVideo.classList.add("popOpen")
        let vodUrl = playVideoOpen.getAttribute("data-videoUrl")
        let videoPop = document.querySelector(".popUpVideo video")
        videoPop.setAttribute("src" , vodUrl)
    })
    closepopUpVideo.addEventListener("click" , function (params) {
        popUpVideo.classList.remove("popOpen")

    })







    
zoomIn.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    console.log("zoomin");
    if (currZoom<zoomMax) {
        currZoom+=0.1
        currImg.style.scale = currZoom
    }
})
zoomOut.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    console.log("zoomout");
    if (currZoom>zoomMin) {
        currZoom-=0.1;
        currImg.style.scale = currZoom
    }
})
rotateLeft.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${-curRotate}deg`
})
rotateRight.addEventListener("click" , function (params) {
    let currImg = document.querySelector(".popImgSlider .swiper-slide-active img");
    curRotate+=90
    currImg.style.rotate = `${curRotate}deg`
})
