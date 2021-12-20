function recojo (contador, imagenNo,color)
{
   
   
          
             const containerWhite = document.querySelectorAll('.item-container')
             const draggable = document.querySelectorAll('.cards')
     
     
     
             
             if (color) 
             { 
                 
                 
                 draggable.forEach(element =>{
                     element.addEventListener('dragstart', (e)=>{
                         element.classList.add('dragging')
                         
                         
                         
                         
                        })
                    })
                    
                    draggable.forEach(element =>{    
                        element.addEventListener('dragend', ()=>{
                            
                            const encima = document.querySelector('.dragging')
                            chooseColor(encima,color)
                            element.classList.remove('dragging')
                            if (imagenNo=="http://127.0.0.1:5501/undefined"){
                    
                  
                   
                   
                }
                else{ pintarCards()
                   }
                
                
                
            })
        })
            

        
    document.querySelectorAll(`.item-${color}`).forEach((element,index)=>{
        element.addEventListener('dragover', e =>{
            e.preventDefault()
            
        })
        
        element.addEventListener('drop', e =>{
            e.preventDefault()
            
           // COLOCA LAS CARTAS EN POSICION QUE QUIERO
            
            //COLOCA LAS CART
            
        //     if (contador===0)
        //     {  document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)
        //     }
        //    if (contador===1){ 
        //     document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)
        //      }
        //      if (contador===2) { 
        //         document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)}
         
        
        const cartasDentro = document.querySelector('.cards')
          
         cartasDentro.classList.add('ajuste')
        document.querySelector('.cartas').classList.add('entrar')
        document.querySelector('p').classList.add('texto')
    document.querySelector(`.item-${color}`).classList.add(`onew${contador}`)

    


containerWhite.forEach(element =>{  

    if ( document.querySelectorAll(`.item-${color}`).classList.contains("onew0") &&  document.querySelectorAll(`.item-${color}`).classList.contains("onew1") &&  document.querySelectorAll(`.item-${color}`).classList.contains("onew2"))
    {
    
        document.querySelector(".color-mag-white").classList.add("active")
    }
}) }) })  
}



}


