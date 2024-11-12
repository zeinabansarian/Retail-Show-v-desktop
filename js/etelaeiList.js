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
        scrollTriggers:{
          trigger:t,
          start:'top 60%',
          end:'bottom bottom'
        }
      })
    gsap.to(t.querySelector('.line'),{
      height:'60px',
      scrollTriggers:{
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
        scrollTriggers:{
          trigger:e,
          start:'top 80%',
          end:'bottom bottom',
         
        }
      })
})