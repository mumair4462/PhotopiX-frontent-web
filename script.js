var show = document.querySelector(".show")
var hide = document.querySelector(".hide")
// var manu = document.querySelector(".manu")
var mb_list = document.querySelector(".mb_list")
var navbar = document.querySelector(".navbar_mobile")


show.addEventListener('click',()=>{
    hide.style.display = "block";
    show.style.display = "none"

    mb_list.style.display = "block"
    
    navbar.style.height = "100vh"
    navbar.style.position = "fixed"
});


hide.addEventListener('click',()=>{
    hide.style.display = "none";
    show.style.display = "block"
    
    mb_list.style.display = "none"
    navbar.style.height = "80px"
    navbar.style.position = "fixed"
});

// ===========================================

var all = document.querySelector(".all")
var nature = document.querySelector(".nature")
var wedding = document.querySelector(".wedding")
var faishon = document.querySelector(".faishon")


var filter_item = document.querySelector(".filter-item")

var all_item = `
<div class="item">
<img src="img/n1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/n2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/n3.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/f1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/f2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/f3.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/w1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/w2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/w3.jpg" alt="Img" width="100" height="100">
</div>
`
var nature_item = `
<div class="item">
<img src="img/n1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/n2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/n3.jpg" alt="Img" width="100" height="100">
</div>
`

var faishon_item = `
<div class="item">
<img src="img/f1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/f2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/f3.jpg" alt="Img" width="100" height="100">
</div>
`
var wedding_item = `
<div class="item">
<img src="img/w1.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/w2.jpg" alt="Img" width="100" height="100">
</div>
<div class="item">
<img src="img/w3.jpg" alt="Img" width="100" height="100">
</div>
`

filter_item.innerHTML = all_item

all.addEventListener('click',()=>{
    all_none()
    all.classList.add("actived")
    filter_item.innerHTML = all_item
});

nature.addEventListener('click',()=>{
    all_none()
    nature.classList.add("actived")
    filter_item.innerHTML = nature_item
});
wedding.addEventListener('click',()=>{
    all_none()
    wedding.classList.add("actived")
    filter_item.innerHTML = wedding_item
});
faishon.addEventListener('click',()=>{
    all_none()
    faishon.classList.add("actived")
    filter_item.innerHTML = faishon_item
});

function all_none(){
    all.classList.remove("actived")   
    nature.classList.remove("actived")   
    faishon.classList.remove("actived")   
    wedding.classList.remove("actived")   
}
