const slider=document.getElementById("js-cta-slider"),sliderCounter=document.getElementById("js-cta-slider-counter"),sliderNext=document.getElementById("js-cta-slider-next"),sliderPrevious=document.getElementById("js-cta-slider-previous"),interleaveOffset=.75,swiper=new Swiper(slider,{loop:!0,autoplay:!0,speed:1e3,allowTouchMove:!1,watchSlidesProgress:!0,mousewheelControl:!1,mousewheel:!1,pagination:{el:".pagination1",type:"custom",renderCustom:function(e,t,s){return s>10?t>9?`<span class="current">${t}</span><i>/</i><span class="total">${s}</span>`:`<span class="current">0${t}</span><i>/</i><span class="total">${s}</span>`:t>9?`<span class="current">${t}</span><i>/</i><span class="total">0${s}</span>`:`<span class="current">0${t}</span><i>/</i><span class="total">0${s}</span>`}},scrollbar:{el:".swiper-progressbar"},navigation:{nextEl:".prevSlide",prevEl:".nextSlide"},on:{progress:function(){let e=this;for(let t=0;t<e.slides.length;t++){let s=e.slides[t].progress*(.75*e.width);TweenMax.set(e.slides[t].querySelector(".slide-inner"),{x:s})}},touchStart:function(){let e=this;for(let t=0;t<e.slides.length;t++)e.slides[t].style.transition=""},setTransition:function(e){let t=this;for(let s=0;s<t.slides.length;s++)t.slides[s].style.transition=e+"ms",t.slides[s].querySelector(".slide-inner").style.transition=e+"ms"}}});let titleMain=document.querySelectorAll(".Title-main");titleMain.forEach((e=>{gsap.to(e.querySelector("h1,h2,h3,h4,h5"),{y:0,scrollTrigger:{trigger:e,start:"top 90%",end:"bottom bottom"}}),gsap.to(e.querySelector("h1,h2,h3,h4,h5"),{y:0,scrollTrigger:{trigger:e,start:"top 90%",end:"bottom bottom"}}),gsap.to(e.querySelector(".line"),{height:"60px",scrollTrigger:{trigger:e,start:"top 90%",end:"bottom bottom"}})}));let scrollTop=document.querySelectorAll(".scrollTop");scrollTop.forEach((e=>{gsap.from(e,{scrollTrigger:{trigger:e,start:"top 90%",end:"bottom bottom"},y:"20vh",opacity:0})}));const lastCourse=new Swiper(".lastCourse",{speed:1e3,spaceBetween:100,slidesPerView:"auto",freeMode:!0}),supporter=new Swiper(".supporter",{speed:1e3,spaceBetween:51,slidesPerView:"auto",freeMode:!0,autoplay:{delay:3e3}});let slidders=document.querySelectorAll(".section5 .swiper-slide");slidders.forEach(((e,t)=>{let s=e.querySelector(".number span"),r=t+1;s.innerHTML=r>9?r:`0${r}`}));let videoC=document.querySelector(".section2 .inVideo"),overlays=document.querySelectorAll(".overlay"),is=!0;videoC.addEventListener("click",(e=>{overlays.forEach((t=>{t.classList.add("hide"),e.stopPropagation();const s=new Plyr("#player");is&&(s.play(),is=!1)}))}));