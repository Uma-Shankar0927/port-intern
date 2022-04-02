//const header = document.getElementById('header');
// gsap.fromTo('#svglogo',
// {y:'0',opacity:1},
// {y:'-15rem',opacity:0,ease :'in.out(2)',delay:2});

gsap.fromTo('.intro',
{y:'0'},
{y:'-800',ease :'in.out(2)',delay:2,duration:1});

gsap.from('.home-content h4',
{
    x:'-500',ease :'in.out(2)',delay:2.2
})
gsap.from('.home-content h1',
{
    x:'-500',ease :'in.out(2)',delay:2.4
})
gsap.from('.home-content h3',
{
    x:'-500',ease :'in.out(2)',delay:2.6
})
gsap.from('.home-content p',
{
    x:'-1000',ease :'in.out(2)',delay:2.8
})
gsap.from('.home-box .home-content a',
{
    x:'-500',ease :'in.out(2)',delay:2.9
})
gsap.from('.home-ic-im',
{
    x:'500',ease :'in.out(2)',delay:3.1
})


const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navsani = document.getElementById('navsani');

document.onclick = function (e) {
    if (e.target.id !== 'navsani' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        navsani.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
    navsani.classList.toggle('active');
}

let btncl = document.getElementById('btnjs');
        btncl.addEventListener('click', function run(){
        confirm("The source code pdf will be downloaded!");
        });     
    
    
        

// ---------scrolltop---------
// window.scroll({
//     top:0,
//     left:0,
//     behavior: 'smooth'
// });
// window.scroll({
//     top:0, 
//     left:0,
//     behavior:'smooth'
// });
const faqvar = document.getElementsByClassName('content-bx');

for(i = 0; i<faqvar.length; i++){
    faqvar[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
