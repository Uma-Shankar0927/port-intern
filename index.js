// const toggle = document.getElementById('toggle');
// const navbar = document.getElementById('navbar');
// const navsani = document.getElementById('navsani');

// document.onclick = function (e) {
//     if (e.target.id !== 'navsani' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
//         toggle.classList.remove('active');
//         navbar.classList.remove('active');
//         navsani.classList.remove('active');
//     }
// }
// toggle.onclick = function () {
//     toggle.classList.toggle('active');
//     navbar.classList.toggle('active');
//     navsani.classList.toggle('active');
// }

var tl = gsap.timeline({
    paused: "true"
});

tl.to(".overlay",
{
    x:"0",
    duration: .7,
    ease: Expo.easeInOut
});
tl.fromTo(".ao",
{
    y:"-50%",
    opacity: 0,
},
{
    y:"0",
    opacity:1,
    duration:.3,
    delay: .3,
    stagger: 0.05
});

function toogle()
{
    tl.play();
}
function tooglec()
{
    tl.reverse();
}