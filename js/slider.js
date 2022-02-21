let sliderWidth = document.querySelector('.slider').clientWidth
let container_sliders = document.querySelector(".slider_container")
let number_cardSliders = container_sliders.children.length
let controls_sides = document.querySelectorAll('.control_side')
let controls_bottom = document.querySelectorAll('.control_bottom')

let valueCard = 0

function setWidthContainer(){
    container_sliders.style = `width: calc(${sliderWidth}px * ${number_cardSliders});`

}

setWidthContainer()
setMarginSlider(valueCard)

window.addEventListener('resize',function(){
    sliderWidth = document.querySelector('.slider').clientWidth
   setWidthContainer()
})


controls_sides.forEach(control_side=>{
    control_side.addEventListener('click',function(e){
        setMarginSlider()

    })
})

controls_bottom.forEach(control_side=>{
    control_side.addEventListener('click',function(e){
        controls_bottom.forEach(c=>{
            c.style.backgroundColor = 'rgba(2, 2, 2, 0.425)'
        })
        this.style.backgroundColor = '#dbd5d5e3'
        setMarginSlider()

    })
})

function setCorControlBottom(control_side){
    let card_value = control_side.dataset.cardnumber;
    if(card_value == valueCard){
        control_side.style.backgroundColor = '#dbd5d5e3'
    }else{
        control_side.style.backgroundColor = 'rgba(2, 2, 2, 0.425)'
    }
}
function setMarginSlider(){
   
    if(container_sliders.style.marginLeft == '0px'){
        valueCard = 1
    }else {
        valueCard = 0
    }

    let margin = (sliderWidth * valueCard)
    container_sliders.style.marginLeft = `-${margin}px`
    console.log(margin,  container_sliders.style.marginLeft)

    controls_bottom.forEach(control_side=>{
        setCorControlBottom(control_side)
    })
}

setInterval(setMarginSlider, 4000)