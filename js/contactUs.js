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