ScrollTrigger.create({
  trigger: '.pinSec',
  start: 'top top',
  endTrigger: ".listcontents",
  end: "bottom 80%",
  pin: true,
  pinSpacing:false,
})
let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
  gsap.to(t.querySelector('h1'),{
      y:0,
      scrollTrigger:{
        trigger:t,
        start:'top 60%',
        end:'bottom bottom'
      }
    })
  gsap.to(t.querySelector('.line'),{
    height:'60px',
    scrollTrigger:{
      trigger:t,
      start:'top 60%',
      end:'bottom bottom'
    }
  })
})
let EtalaeiItem = document.querySelectorAll('.EtalaeiItem')
EtalaeiItem.forEach(e=>{
  gsap.to(e,{
    opacity:1,
    y:0,
    stagger: 0.5,
      scrollTrigger:{
        trigger:e,
        start:'top 100%',
        end:'bottom bottom',
       
      }
    })
})