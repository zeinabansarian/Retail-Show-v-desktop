let header = document.querySelector('header')
header.classList.add('light')
let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h1'),{
        y:0,

      })
    gsap.to(t.querySelector('.line'),{
      height:'60px',

    })
})
gsap.to('.Boss-Container h1',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.Boss-Container h2',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.Boss-Container .RightSec p',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })

  gsap.to('.section-3 h2',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.section-3 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.section-3 p',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.section-3 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })