let items_up  = document.querySelectorAll(".item_up")

items_up.forEach(item_up =>{
    item_up.addEventListener('click',function(){
        let menu_down = this.children[1]
        let anlgeIcon = this.children[0]
        if(document.body.clientWidth <= 780){
           
            if(menu_down.clientHeight == 0){
                menu_down.classList.add('show_menu')
                menu_down.classList.remove('hide_menu')
            }else{
                menu_down.classList.add('hide_menu')
                menu_down.classList.remove('show_menu')
            }
        }
    })
})


// MENU MOBILE

let container_menuMobile = document.querySelector('.container_menu_mobile')

let menuMobile = document.querySelector('.menu_mobile')

let buttom_menuMobile = document.querySelector('#buttonMenu')

buttom_menuMobile.addEventListener('click',()=>{
    showMenu(menuMobile)
    container_menuMobile.style.maxWidth = '100%'
})

menuMobile.addEventListener('click',(e)=>{
    e.stopPropagation()
})
container_menuMobile.addEventListener('click',(e)=>{
    console.log('.container')
    hideMenu(e.target)

})



function hideMenu(e){
    menuMobile.classList.add('hide_menuMobile')
    menuMobile.classList.remove('show_menuMobile')
    setTimeout(()=>{
        e.style.maxWidth = '0px'
    },300)
}

function showMenu(e){
    e.classList.remove('hide_menuMobile')
    e.classList.add('show_menuMobile')
}