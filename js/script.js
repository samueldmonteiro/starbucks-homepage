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



