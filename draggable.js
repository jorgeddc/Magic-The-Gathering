function recojo (contador, imagenNo,color)
{
    console.log(color)
    const contenedorWhite = document.querySelector(".container-white")    
    
    
    const draggable = document.querySelectorAll('.cards') 
     const containerWhite = document.querySelectorAll('.item-container')
     
     
     
     
     if (color=='White') 
     { 
     draggable.forEach(element =>{
         element.addEventListener('dragstart', (e)=>{
             element.classList.add('dragging')
             
           
             
             
            })
        })

        draggable.forEach(element =>{    
        element.addEventListener('dragend', ()=>{
                element.classList.remove('dragging')
                
                if (imagenNo=="http://127.0.0.1:5501/undefined"){
                    
                   console.log('joder')
                   
                }
                else{ pintarCards()}
                
                
                
            })
        })
            

        
    containerWhite.forEach((element,index)=>{
        element.addEventListener('dragover', e =>{
            e.preventDefault()
            
        })
        
        element.addEventListener('drop', e =>{
            e.preventDefault()
            
            const encima = document.querySelector('.dragging')
            //COLOCA LAS CART
            
            if (contador===0)
            {containerWhite[2].appendChild(encima)
            }
           if (contador===1){ 
                containerWhite[1].appendChild(encima)
             }
             if (contador===2) { 
                 containerWhite[0].appendChild(encima)}
    
    
          
    document.querySelector(".item-container").classList.add(`onew${contador}`)

     draggable.forEach(element =>{ 
        document.querySelector('.cards').classList.add('ajuste')
    document.querySelector('.cartas').classList.add('entrar')
    document.querySelector('p').classList.add('texto')
})

containerWhite.forEach(element =>{  

    if (containerWhite[0].classList.contains("onew0") && containerWhite[0].classList.contains("onew1") && containerWhite[0].classList.contains("onew2"))
    {
    
        document.querySelector(".color-mag-white").classList.add("active")
    }
}) }) })  
}



}


