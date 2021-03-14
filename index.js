
// add active class for navbar 
// var header = document.getElementById("menu")
// var btns =document.getElementsByClassName('menu_item')

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
console.log("index");

//end on active class


var btns2 =document.getElementsByClassName('categoryBtn')

for (let q = 0; q < btns2.length; q++) {
  btns2[q].addEventListener("click", function() {
  let currents = document.getElementsByClassName("actives");
  console.log(currents[0]);
  currents[0].className = currents[0].className.replace(" actives", "");
  this.className += " actives";
  });
}


//back to top 
let backToTop= document.getElementById('back-to-home')

window.onscroll = () =>{
  if(document.body.scrollTop> 200 || document.documentElement.scrollTop> 200){
    backToTop.style.display = 'flex';
  }else{
    backToTop.style.display = 'none';
  }
}

// top nav menu 
let manuItems = document.getElementsByClassName('menu_item')
Array.from(manuItems).forEach((item, index) =>{
 item.onclick = e =>{
  let currMenu = document.querySelector('.active')
  console.log(currMenu.classList);
  currMenu.classList.remove('active')
  item.classList.add('active')
 }
})

//food category
let foodMenuList = document.querySelector('.food-item-wrap')
let foodCategory = document.querySelector('.food-category')

let categoris = foodCategory.querySelectorAll('button')

Array.from(categoris).forEach((item, index)=>{
  item.onclick = e =>{
  let  currCat = foodCategory.querySelector('button.actives')
  currCat.classList.remove('actives')
  e.target.classList.add('actives')
  foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
  console.log(foodMenuList.classList);
  console.log(e.target.getAttribute('data-food-type'));
  }
})

//onscroll animation

let scroll = window.requestAnimationFrame || function(callback){
  window.setTimeout(callback, 1000/60)
}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElViewPort = (el) =>{
  let rect = el.getBoundingClientRect()
  return(
    (rect.top <= 0 && rect.bottom >=0) 
    ||  (rect.bottom >=(window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
  )
}

loop = () =>{
  elToShow.forEach((item, index)=>{
    if(isElViewPort(item)){
     item.classList.add('start')
    }else{
      item.classList.remove('start')
    }
  })
  scroll(loop)
}

loop()

//mobile nav

let bottomNavItems = document.querySelectorAll('.mb-nav-item')
let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index)=>{
  item.onclick=(e) =>{
    let crrItem = document.querySelector('.mb-nav-item.active')
    crrItem.classList.remove('active')
    item.classList.add('active')
    bottomMove.style.left = index * 25 +'%'
  } 
})