let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h1'),{
        y:0,

      })
    gsap.to(t.querySelector('.line'),{
      height:'60px',

    })
})
gsap.to('.Form-container p',{
    y:0,

  })
  gsap.to('h2',{
    y:0,
    scrollTriggers:{
      trigger:'.Section-2 ',
    start:'top 90%',
      end:'bottom bottom'
    }
  })
  
  gsap.to('h3',{
    y:0,
    scrollTriggers:{
      trigger:'.Section-2 ',
    start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('h4',{
    y:0,
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })

  gsap.to('p',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('span',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('a',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })