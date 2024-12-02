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