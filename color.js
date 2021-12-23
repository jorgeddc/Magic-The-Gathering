arrayColorW=[]
arrayColorB=[]
arrayColorBl=[]

function chooseColor (encima,color,draggable){
  
switch (color) {
    case "White":
   arrayColorW.push(color)
  
     if (arrayColorW.length === 1) { 
        document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)
      ajusteCards(color,draggable)}
        if (arrayColorW.length === 2) { 
          document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)
      ajusteCards(color,draggable)}
      if (arrayColorW.length === 3) { 
            document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)
            document.querySelector('.color-mag-white').classList.add('active')
      ajusteCards(color,draggable)
      document.querySelector(".down-logo").style.top="-3500px"
      document.querySelector(".root").style.display="none"
      document.querySelector(".all-cards").style.display="grid"
    }
    
        
    
     
  
    
      break
    case "Blue":
      console.log('blue-color')
    
      arrayColorB.push(color)
  
      if (arrayColorB.length === 1) { 
         document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)
      ajusteCards(color,draggable)}
        
        
         if (arrayColorB.length === 2) { 
           document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)
      ajusteCards(color,draggable)}
    
           if (arrayColorB.length === 3) { 
             document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)
            document.querySelector('.color-mag-blue').classList.add('active')

      ajusteCards(color,draggable)
      document.querySelector(".down-logo").style.top="-3500px"
      document.querySelector(".root").style.display="none"
      document.querySelector(".all-cards").style.display="grid"


    }
    
    
      break

    case "Black":
      arrayColorBl.push(color)
  
      if (arrayColorBl.length === 1) { 
         document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)
      ajusteCards(color,draggable)}
    
         if (arrayColorBl.length === 2) { 
           document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)
      ajusteCards(color,draggable)
    }
           if (arrayColorBl.length === 3) { 
             document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)
            document.querySelector('.color-mag-black').classList.add('active')

      ajusteCards(color,draggable)
      document.querySelector(".down-logo").style.top="-3500px"
      document.querySelector(".root").style.display="none"
      document.querySelector(".all-cards").style.display="grid"



    }
      break;
   
  }
}
function ajusteCards(color,draggable)
{
  const texto= document.querySelectorAll('p')
  const cartas = document.querySelectorAll('.cartas')
   
  draggable.forEach(element=>{
    element.classList.add('ajuste')
  })
cartas.forEach(element=>{
  element.classList.add('entrar')
})
 texto.forEach(element=>{
   element.classList.add('texto')
 })

document.querySelector(`.item-${color}`).classList.add(`onew${contador}`)
const containerWhite = document.querySelectorAll('.item-container')




containerWhite.forEach(element =>{  

if ( document.querySelectorAll(`.item-${color}`).classList.contains("onew0") &&  document.querySelectorAll(`.item-${color}`).classList.contains("onew1") &&  document.querySelectorAll(`.item-${color}`).classList.contains("onew2"))
{

document.querySelector(".color-mag-white").classList.add("active")
}
}) 
} 