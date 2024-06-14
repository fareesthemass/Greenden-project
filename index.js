var sidenavbar = document.getElementById('sidenavbar')
var menutaggle = document.getElementById('menutoggle')
var cancelsidenavbar = document.getElementById('cancelsidenavbar')

menutaggle.addEventListener('click',function(){
    sidenavbar.style.right=0
})

cancelsidenavbar.addEventListener('click',function(){
    sidenavbar.style.right="-50%"
})