

function recojo (imagenNo)
{
    let llamadas=0
    
       
   
    if (imagenNo=="http://127.0.0.1:5501/undefined"){

    
        pintarCards()
    }
    let cont = 0 ;
    const draggable = document.querySelectorAll('.cards') 
    const containerWhite = document.querySelectorAll('.item-container')
   

draggable.forEach(element =>{
element.addEventListener('dragstart', (e)=>{
element.classList.add('dragging')
color=false
color = e.target.classList.contains('White')


})
element.addEventListener('dragend', ()=>{
    element.classList.remove('dragging')
    
  
  
    
    
})
})

containerWhite.forEach((element,index)=>{
    element.addEventListener('dragover', e =>{
        e.preventDefault()
       
    })

     
element.addEventListener('drop', e =>{
e.preventDefault()

const encima = document.querySelector('.dragging')
//COLOCA LAS CARTAS EN ORDEN
if (cont===0){containerWhite[2].appendChild(encima)}
if (cont===1){ containerWhite[1].appendChild(encima)}
if (cont===2 ){ containerWhite[0].appendChild(encima)}
document.querySelector(".item-container").classList.add(`onew${cont}`)

if (cont<=0)
{
    console.log(cont)
    pintarCards()
}
cont++




 if (cont>=0){ 
draggable.forEach(element =>{ 
document.querySelector('.cards').classList.add('ajuste')
document.querySelector('.cartas').classList.add('entrar')
document.querySelector('p').classList.add('texto')

})


}
containerWhite.forEach(element =>{  

if (containerWhite[0].classList.contains("onew0") && containerWhite[0].classList.contains("onew1") && containerWhite[0].classList.contains("onew2"))
{

document.querySelector(".color-mag-white").classList.add("active")
}
})
})  

})


}


