gsap.registerPlugin(ScrollTrigger)
let mapcontain = document.querySelector('.Map-Container')
setTimeout(() => {
  mapcontain.classList.add('fade-left')
}, 500);
gsap.to('.bgg',{
  left:0,
})
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
    opacity:1,
    scrollTrigger:{
      trigger:'.Section-2 ',
    start:'top 90%',
      end:'bottom bottom'
    }
  })
  
  gsap.to('h3',{
    y:0,
    opacity:1,
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('h4',{
    y:0,
    opacity:1,
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })

  gsap.to('p',{
    y:0,
    opacity:1,
    stagger:'.1',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('span',{
    y:0,
    opacity:1,
    stagger:'.1',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('a',{
    y:0,
    opacity:1,
    stagger:'.1',
    scrollTrigger:{
      trigger:'.Section-2 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })

let map1 = document.querySelector('.Map_1')
let xLat = map1.getAttribute('data-x')
let yLat = map1.getAttribute('data-y')
let re1 = yLat.replace('<p>','')
yLat = re1.replace('</p>','')
let map_1 = L.map('Map_1',{
    center:[yLat,xLat]
    ,zoom:10
})
let tiles= new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
minZoom:'10'
}).addTo(map_1);
var customIcon = L.icon({
  iconUrl: './images/location.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });
  var marker1 = L.marker([yLat,xLat],{ icon: customIcon }).addTo(map_1);

  function onSource(args) { 
  const captcha = document.querySelector("input[name='captcha']").value; 
  const captchaid = document.querySelector("input[name='captchaid']").value; 
  console.log(captcha);
  const stringJson = JSON.stringify(args.source?.rows[0]); 
  $bc.setSource('edit.object', { 
      value: stringJson, 
      captcha: captcha, 
      captchaid: captchaid ,

  }) 
  console.log('sourcd',stringJson);
} 


async function OnProcessesEditObjectFn(args) {
  const response = args.response;
const json = await response.json();

console.log(json);
if (json.errorid == 6) {
            console.log('با موفقیت ثبت شذ');
            document.querySelector('.main-container').querySelector('span.text').innerHTML='پیام شما با موفقیت ثبت شد'
            document.querySelector('.main-container .icon').classList.add('show')
            document.querySelector('.main-container').classList.add('SEND')
  setTimeout(()=>{
    document.querySelector('.main-container').classList.remove('SEND')
    document.querySelector('.main-container .icon').classList.remove('show')
  },2000)
          

}

if (json.errorid == 4) {
   console.log(json);
   document.querySelector('.main-container').querySelector('span.text').innerHTML='  کپچا اشتباه وارد شده  '
   document.querySelector('.main-container').classList.add('SEND')
   document.querySelector('.main-container .icon').classList.remove('show')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
document.querySelector('.main-container .icon').classList.remove('show')
},2000)
}

}
function renderEditobject(args){
  console.log('renderEditobject',args);
  gsap.to('.lds-roller2',{
      opacity:0,
      duration:.5,
      ease:'none'
  })
}

function rendered(){
  console.log('form rendered!');
  gsap.to('.lds-roller',{
    display:'none',
    duration:.5,
    ease:'none'
})
setTimeout(() => {
    gsap.to('.Form-container',{
    opacity:'1',
    duration:1,
    ease:'none'
})
}, 300);
setTimeout(()=>{
let name = document.querySelector('[data-bc-schema-column] [data-bc-question]:nth-child(1) input')
let email = document.querySelector('[data-bc-schema-column] [data-bc-question]:nth-child(2) input')
let phone = document.querySelector('[data-bc-schema-column] [data-bc-question]:nth-child(3) input')
let texta = document.querySelector('[data-bc-schema-column] [data-bc-question]:nth-child(4) textarea')

$(name).attr('placeholder','  نام و نام‌خانوادگی ');
$(email).attr('placeholder','ایمیل  ');
$(phone).attr('placeholder','  تلفن همراه  ');
$(texta).attr('placeholder','  درخواست خود را به صورت کامل وارد نمایید');
let isEmpty=false
let buttons = document.querySelector('.ContactUs-C .RightSec .schemaBtn1')
let inputs = document.querySelectorAll('.ContactUs-C .RightSec input[type="text"]')
buttons.addEventListener('click',()=>{
console.log('vkkkk');
inputs.forEach(input=>{
  console.log(input.value);
    if(input.value == ""){
       isEmpty = true
        console.log('فیلد را پرکنید');
    }
  })
if(isEmpty){
  isEmpty = false
  document.querySelector('.main-container').querySelector('span.text').innerHTML='  فیلدها را پرکنید '
  document.querySelector('.main-container').classList.add('SEND')
  document.querySelector('.main-container .icon').classList.remove('show')

setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
document.querySelector('.main-container .icon').classList.remove('show')
},2000)
}
})

console.log('rendered');

    
  },100)






}
function fn(){
   
  console.log('onproccesinggg');
  
}
