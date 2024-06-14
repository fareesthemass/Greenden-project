var sidenavbar = document.getElementById('sidenavbar')
var menutaggle = document.getElementById('menutoggle')
var cancelsidenavbar = document.getElementById('cancelsidenavbar')

menutaggle.addEventListener('click', function () {
    sidenavbar.style.right = 0
})

cancelsidenavbar.addEventListener('click', function () {
    sidenavbar.style.right = "-50%"
})


//search functionality

var productcontainer = document.getElementById("product_container")
var search = document.getElementById('search')
var productparent = productcontainer.querySelectorAll('div')

search.addEventListener('keyup', function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count<productparent.length; count = count + 1) {

        var productname = productparent[count].querySelectorAll('p')[0].textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productparent[count].style.display = 'none'
        }
        else {
            productparent[count].style.display = 'block'
        }
    }

})

